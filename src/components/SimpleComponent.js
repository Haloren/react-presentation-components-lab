// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            // mood: 'happy'
            mood: '😃'
        }
    }

    handleClick = (event) => {
        // console.log(event, this.state.mood)

        let newMood = this.state.mood
        // newMood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
        newMood === '😃' ? this.setState({mood: '😞'}) : this.setState({mood: '😃'})
    }

    render() {
        // console.log(this.state)
        const myStyle = {
            color: 'white',
            backgroundColor: '#1874FF',
            fontSize: '9rem',
            padding: '1rem',
            margin: '2rem',
            cursor: 'pointer',
            height: '25vh',
            width: '75vw',
            display: 'grid',
            placeItems: 'center' 
        }

        return(
            <div style={myStyle} onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}