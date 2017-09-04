# fullcalendar-reactwrapper 

A react wrapper component for the the [FullCalendar](https://fullcalendar.io/) (a javascript event calendar).

## Table of contents
1. [Installation](#installation)
2. [Building](#building)
3. [Basic usage](#basic-usage)
4. [Examples](#examples)
5. [License](#license)


## Installation 

`npm install fullcalendar-reactwrapper --save`

Include `fullcalendar-reactwrapper/dist/css/fullcalendar.min.css` for styles.

## Building 

## Basic usage

`fullcalendar-reactwrapper` creates a `<FullCalendar/>` component. You can use it just like any other React component. For example:
 
```jsx
// import React...
import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	events:[
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}
			],		
	}
  }

  render() {
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
	     header = {{
			left: 'prev,next today myCustomButton',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		}}
	     defaultDate={'2017-09-12'}
	    navLinks= {true} // can click day/week names to navigate views
	    editable= {true}
	    eventLimit= {true} // allow "more" link when too many events
	    events = {this.state.events}	
	/>
      </div>
    );
  }
}
```

The `id` property declares the `id` of the root element for the FullCalendar component. It is optional - if it isn't provided, the FullCalendar component will get a random generated `id`.

## Examples 

## License 
MIT

## Dependencies

* fullcalendar
* moment 
* jquery 

## Peer dependencies 

* react
* react-dom


