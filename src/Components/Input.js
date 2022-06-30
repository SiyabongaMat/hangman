import React from 'react';

class InputButtons extends React.Component
{
    constructor (props)
    {
        super(props);
        this.letterClick = this.letterClick.bind(this);
    }

    letterClick (e)
    {
        //calls the function props and passes the event as parameter passed into the letterSelector props
        this.props.letterSelector(e.target.value);
    }
    
    render ()
    {
        const letters = this.props.letters;
        //the alphabet array is mapped and displayed as individual elements with button tags
        return letters.map ( letter => (
            <button className='letter-button' value={ letter } key={ letter } onClick={ this.letterClick }>{ letter }</button>
        ));
    }
}

export default InputButtons;