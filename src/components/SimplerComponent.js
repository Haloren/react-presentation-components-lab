// Code SimplerComponent Here
import React from 'react';

const SimplerComponent = (props) => {
    const myStyle = {
        color: 'white',
        backgroundColor: '#1874FF',
        background: 'linear-gradient(0deg, rgba(255,234,0,1) 0%, rgba(24,116,255,1) 100%)',
        fontSize: '4rem',
        padding: '1rem',
        margin: '2rem',
        cursor: 'pointer',
        height: '25vh',
        width: '75vw',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center'
    }

    return(
    <div onClick={props.handleClick} style={myStyle}>
        I am just happy.
    </div>
    )
}

export default SimplerComponent