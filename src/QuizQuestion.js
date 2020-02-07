import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  render() {
    const options = this.props.quiz_question.answer_options;
    console.log(this.props.quiz_question);
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {options.map((option, index) => <QuizQuestionButton key={index} button_text={option}/>)}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;
