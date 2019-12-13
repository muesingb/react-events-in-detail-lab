import React from 'react';

class CoordinatesButton extends React.Component {
    createArray = (e) => {
        let coordinatesArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }
    
    render() {
        return (
            <button onClick={this.createArray} >CoordinatesButton</button>
        )
    }
}

export default CoordinatesButton

// Within CoordinatesButton, render a button. 
// On click of the button, create an array with two elements: 
// the X and Y coordinates of the mouse. Find these using the event data.
// Pass this event data in as the argument for the onReceiveCoordinates prop.

// If successful, the current x,y position of your mouse should be logged.