import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {shuffle} from "lodash-es";
import "picnic";

class App extends Component {
  state = {
    question: "",
    possibleAnswers: [],
    correctAnswer: "",
    score: 0,
    sessionToken: ""
  }
  componentDidMount = () => {
    fetch("https://opentdb.com/api_token.php?command=request")
    .then(response => response.json())
    .then(json => {
      this.setState({
        sessionToken: json.token
      })
    })
    this.fetchQuestion()
  }
  checkAnswer = (pA) => {
    if (pA === this.state.correctAnswer) {
      this.setState({
        score: this.state.score + 1
      })
      this.fetchQuestion()
    }
  }
  fetchQuestion = () => {
    fetch(`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&token=${this.state.sessionToken}`)
    .then(response => response.json())
    .then(json => {
      const result = json.results[0]
      this.setState({
        question: result.question,
        possibleAnswers: shuffle([result.correct_answer, ...result.incorrect_answers]),
        correctAnswer: result.correct_answer
      })
    })
  }
  render() {
    return (
      <div className="App">
        <article class="card">
          <header>
            <h3 style={{display: "flex", justifyContent: "center"}} dangerouslySetInnerHTML={{__html:this.state.question}}/>
          </header>
          <footer style={{display: "flex", justifyContent: "center"}}>
            {this.state.possibleAnswers.map(pA => <button key={pA} style={{margin: "0 10px"}} dangerouslySetInnerHTML={{__html:pA}} onClick={() => this.checkAnswer(pA)}/>)}
          </footer>
        </article>
        <h2>Correct: {this.state.score}</h2>
      </div>
    );
  }
}

export default App;
