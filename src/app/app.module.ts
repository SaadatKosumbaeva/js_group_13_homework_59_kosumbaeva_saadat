import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule } from '@angular/forms';
import { QuestionService } from './shared/question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
