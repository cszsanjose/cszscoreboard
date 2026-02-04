import { Component, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import {Match} from "../../config/match";
import {guessingGames} from "../../config/guessing-games";
import {GuessAnswersFormComponent} from "../guess-answers-form/guess-answers-form.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-guess-editor',
    templateUrl: './guess-editor.component.html',
    styleUrls: ['./guess-editor.component.scss'],
    host: {
        class: 'w-100 p-3 d-flex-column gap-3 overflow-hidden'
    },
    imports: [ReactiveFormsModule, FormsModule, GuessAnswersFormComponent]
})
export class GuessEditorComponent implements OnInit, OnDestroy {
  readonly match = inject(Match);

  public readonly games = guessingGames

  private readonly blueAnswers = viewChild<GuessAnswersFormComponent>('blue');
  private readonly redAnswers = viewChild<GuessAnswersFormComponent>('red');
  private readonly answers = viewChild<GuessAnswersFormComponent>('answers');

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  get game() {
    return this.match.guesses.game
  }

  set game(val) {
    if (val !== this.game) {
      this.match.guesses.game = val
      this.blueAnswers()?.initForm()
      this.redAnswers()?.initForm()
      this.answers()?.initForm()
    }
  }

  reset() {
    this.blueAnswers()?.reset()
    this.redAnswers()?.reset()
    this.answers()?.reset()
    this.match.guesses.reset()
  }
}
