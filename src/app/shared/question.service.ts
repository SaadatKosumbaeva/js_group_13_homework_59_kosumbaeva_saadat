import { Question } from './question.model';

export class QuestionService {
  private questions: Question[] = [
    new Question('Question text 1', 'Answer1', 'Help1'),
    new Question('Question text 2', 'Answer2', 'Help2'),
    new Question('Question text 3', 'Answer3', 'Help3'),
    new Question('Question text 4', 'Answer4', 'Help4'),
  ];
  currentQuestion!: Question;

  getQuestions() {
    return this.questions.slice();
  }

  checkAnswer(answer: string, currentQuestion: Question) {
    this.currentQuestion = currentQuestion;
    if (answer === this.currentQuestion.answer) {
      this.currentQuestion.answerStatus = 'Correct';
    } else {
      this.currentQuestion.answerStatus = 'Incorrect';
    }
  }
}
