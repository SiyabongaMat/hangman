import React from 'react';

class AlertOutcome extends React.Component
{
    render (props)
    {
        let noChance = this.props.badVerdict;
        let w = this.props.goodVerdict;
        let explainRules = this.props.rules;
        let chosenWord = this.props.correctWord;

        /*
        conditional rendering based on user interaction. If the game is lost or won the different outcomes are displayed.
        If the user clicks on the help button the rules of the game are displayed to the user
        */
        return (
            <div>
                <h1>{ noChance === true ? "You lost! Better luck next time, the right word is "+chosenWord : "" }</h1>
                <h1>{ w === true ? "Congrants! You won" : "" }</h1>
                {explainRules === true &&
                    <div>
                        <p>
                            To play the game you have to enter the correct letter in the word. <br />
                            With each correct letter clicked on the empty letters get filled in <br />
                            giving you clues of the correct word. However you have 10 chances to <br />
                            guess the correct word, but if you run out of chances the man is <br />
                            hanged and you lose the game.<br />
                            <br />
                            Good luck!
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default AlertOutcome;