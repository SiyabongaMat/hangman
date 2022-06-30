import React from 'react';

class RenderUpdates extends React.Component
{
    render(props)
    {
        const cha = this.props.chances;
        const guessedWords = this.props.wordsUsed;

        //chances remaining and the words already clicked are displayed below
        return (
            <div>
                <h1>Remaining chances: { cha }</h1>
                <p>Words used: </p>
                <p>{ guessedWords }</p>
            </div>
        );
    }
}

export default RenderUpdates;