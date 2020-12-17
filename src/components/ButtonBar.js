import React, {Component} from 'react'

class ButtonBar extends Component {
    constructor(){
        super()

        this.state = {
            index: 1,
            disabledForward: false,
            disabledBack: false,
        }
    }



    render(){
        
        return(
            <div className="button-bar">
                <button className="directional-btns" onClick = {this.props.handleScrollBack}>Previous</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button className="directional-btns" onClick = {() => this.props.handleScrollForward}>Next</button>
            </div>
        )
        
    }
}

export default ButtonBar

/*
-Scrolling. 
-I have an event handler so that when they are clicked they will scroll to the next item in data.js
-Or am I essentially unmounting the previous person and mounting the next person in the array from data.js
-Need to have special handling if they try to go over 25 or less than 1.

*/