import './App.css';
import React from 'react';
import Header from './Components/Header';
import InputButtons from './Components/Input';
import Word from './Components/Word';
import AlertOutcome from './Components/Popup';
import allLetters from './Components/dictionary.js';
//text file was turned into a .js file so importing the contents is easier
import RenderUpdates from './Components/Updates';

const randomWords = allLetters.split('\n');
const randomlyChosenWord = randomWords[Math.floor(Math.random() * randomWords.length)].toLowerCase();
//code above retrieves random words and splits them by line than a random letter is chosen from the array

const word = randomlyChosenWord.split('');
//the randomly chosen word is split into individual characters
const ast = [];
const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//alphabets array is created to be rendered as clickable buttons in Word component

for (let i=0;i<word.length;i++)
{
  ast.push("*");
  //empty array created in line 17 is filled with astericks for all the empty letter slots
}

class App extends React.Component
{
  constructor (props)
  {
    super(props);
    //state to check countdown, create a set for all letters to input and boolean values for different functions
    this.state = ({ chances: 10, guessed: new Set([]), help: false, gameLost: false, gameWon: false });
    this.handleLetter = this.handleLetter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  findIndexes (arr, val)
  //function accepts the random word and letter cllicked as parameters
  {
    let index = [], i;
    /*
    for array loops through the word to see if the letter clicked happens more than once and the values are pushed into
    index array initialized at line 41
    */
    for (i=0 ; i<arr.length ; i++)
      if (arr[i] === val)
        index.push(i);
    return index;
    //index array is returned
  }

  handleClick ()
  {
    //event is executed when the help button is clicked. The state is set to opposite its current state
    this.setState(prevState => ({ help: !prevState.help }));
  }

  handleLetter (l)  //value of clicked letter is parsed as a parameter
  {
    let input = l;
    if (!this.state.guessed.has(input) && this.state.chances !== 0 && this.state.gameWon !== true)
    //if checks if the letter is already in the Set and if chances are not equal to 0 and if gameWon is false
    {
      if (word.includes(input))
      //if word variable has input in the word the code below is initialized
      {
        this.setState({ guessed: this.state.guessed.add(input) });
        //letter is added into the set as a new letter because it isn't in the Set
        let indexes = this.findIndexes(word, input);//calls the findIndexes function and returned value is added to 'indexes'

        if (indexes.length > 1)
        {
          /*
          if indexes has more than one element, loop through indexes and the elements in indexes are used to 
          replace the elements in the ast array initialized in line 17 with the letter clicked
          */
          for (let i=0;i<indexes.length;i++)
          {
            ast[indexes[i]] = input;
          }
        }
        else
        {
          //if indexes doesn't have more than 1 element the value of index is used to replace the ast array with the clicked on letter
          ast[indexes] = input;
        }

        if (!ast.includes('*'))
        //this if statement checks if the ast array still contains *'s, if it does not the state for game state is changed
          this.setState({ gameWon: true });
      }
      else
      {
        /*
        if the letter clicked is not in the word the number of chances counter is decreased
        */
        this.setState(prevState => ({ guessed: this.state.guessed.add(input), chances: prevState.chances - 1 }));
        
        if (this.state.chances === 1 && ast.includes('*'))
        //if the number of chances is 1 and the 'ast' array still has astericks than gameLost true outcome is altered in state
          this.setState({ gameLost: true });
      }
    }
  }

  render ()
  {
    const chancesLeft = this.state.chances;
    const lossOutcome = this.state.gameLost;
    const winOutcome = this.state.gameWon;
    const hint = this.state.help;
    return (
      <div className='all-content'>
        <div className='top-section'>
          <Header num={ chancesLeft /* number of chances state is passed to header component */ } />
          <InputButtons letters = { alphabets } /*alphabet array and handleLetter function is parsed as props*/ letterSelector = { this.handleLetter } />
          <Word /* the ast array is parsed as props to the word component */ spaces = { ast } />
        </div>
        <div className='renders'>
          <RenderUpdates /*words used and chances are passed as props */  chances = { chancesLeft } wordsUsed = { this.state.guessed } />
          <AlertOutcome /*different outcomes are passed as props from state*/ badVerdict = { lossOutcome } goodVerdict = { winOutcome } rules = { hint } correctWord = { randomlyChosenWord } />
          <button onClick={ this.handleClick }>{ this.state.help ? "Close" : "Help!" }</button>
        </div>
      </div>
    );
  }
}

export default App;