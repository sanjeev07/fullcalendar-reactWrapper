import React from 'react';
import $ from "jquery";
import fullCalendar from "fullcalendar";
import moment from 'moment';
import FullcalendarObjectMapper from './fullcalendarObjectMapper';
import '../../node_modules/fullcalendar/dist/fullcalendar.min.css'
export default class FullCalendar extends React.Component{
	constructor(){
		super();
		this.jq = $.noConflict();
		this.fullcalendarObjectMapper = new FullcalendarObjectMapper();
		this.root = null;
		this.instance = null;
	}

	componentDidMount(){
		const objectMapperSettings = this.fullcalendarObjectMapper.getSettings(this.props);
		this.instance = this.jq(`#${this.root}`).fullCalendar(objectMapperSettings);
	}

  	componentWillReceiveProps(nextProps){
  		// console.log(nextProps);
  		this.jq(`#${this.root}`).fullCalendar('destroy');
  		const objectMapperSettings = this.fullcalendarObjectMapper.getSettings(nextProps);
    	this.instance = this.jq(`#${this.root}`).fullCalendar(objectMapperSettings);
    	// $(`#${this.root}`).fullCalendar( 'render' )
    	/*this.jq(`#${this.root}`).fullCalendar('removeEvents');
        this.jq(`#${this.root}`).fullCalendar( 'addEventSource', nextProps.events);         
        this.jq(`#${this.root}`).fullCalendar( 'refetchEvents' );*/
  	}

	render(){
		this.root = this.props.root || 'ID' + new Date.getTime(); 
		return(
			<div id={this.root}></div>
		)
	}
}