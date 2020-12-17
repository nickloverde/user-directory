import React, {Component} from 'react'

class Contact extends Component{
    constructor(){
        super()
        this.state ={}
    }


    render(){
    return(
        <div className="directory-container">
            <h2>{this.props.contact.id}/25</h2>
            <h2 className="underline-text">{this.props.contact.name.first} {this.props.contact.name.last}</h2>
            <h3>From: {this.props.contact.city}, {this.props.contact.country}</h3>
            <h3>Job Title: {this.props.contact.title}</h3>
            <h3>Employer: {this.props.contact.employer}</h3>
            <br>
            </br>
            <h3>Favorite Movies:</h3>
                <ol>
                    <li>{this.props.contact.favoriteMovies[0]}</li>
                    <li>{this.props.contact.favoriteMovies[1]}</li>
                    <li>{this.props.contact.favoriteMovies[2]}</li>
                </ol>

        </div>
    
    )
    }
}

export default Contact