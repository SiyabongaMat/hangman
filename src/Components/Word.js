import React from 'react';

function Word (props)
{
    const astericksChars = props.spaces;
    /*
    the astericks array is rendered and changed based on user interaction. If the correct word is clicked, the array is changed 
    and rendered 
    */
    return (
        <div>
            <h2>{ astericksChars }</h2>
        </div>
    );
}

export default Word;