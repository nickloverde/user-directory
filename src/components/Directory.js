import React, {Component} from 'react'
import Contact from './Contact'
import data from '../data'
import ButtonBar from './ButtonBar'

class Directory extends Component {
    constructor(){
        super()

        this.state = {
           currentIndex: 0,
        }

        // this.handleChangeIndex = this.handleChangeIndex.bind(this)
        this.handleScrollForward = this.handleScrollForward.bind(this)
        this.handleScrollBack = this.handleScrollBack.bind(this)
    }


handleScrollForward(e){
    
    let index = this.state.currentIndex + 1
    let disabledForward = index ===  (data.length - 1)

    

    this.setState({
        currentIndex: index, disabledForward: disabledForward, disabledBack: false
    })
}

handleScrollBack(e){
    let index = this.state.currentIndex - 1
    let disabledBack = (index === 0)
    this.setState({
        currentIndex: index, disabledBack: disabledBack, disabledForward: false
    })
}

    render(){
        console.log(this.state.currentIndex)
        return(
            <div className="directory-container">
                <Contact contact={data[this.state.currentIndex]} person={data}/>
                <ButtonBar handleScrollBack = {this.handleScrollBack} handleScrollForward={this.handleScrollForward}/>
            </div>
        )
    }
}

export default Directory