import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() question!: Question;
  answer = '';
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  onAnswer() {
    if (this.answer.trim().length) {
      this.questionService.checkAnswer(this.answer, this.question);
    }
    this.answer = '';
  }
}
