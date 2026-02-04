import { AfterViewInit, Component, ElementRef, OnDestroy, inject, viewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from "@angular/forms";
import {InputService} from "../input.service";
import {Modal} from 'bootstrap'

export type InputCallback = (text: string) => void

export interface InputOptions {
  title: string
  prompt: string
  placeholder?: string
  initial?: string
  callback: InputCallback
}

@Component({
    selector: 'app-input-modal',
    templateUrl: './input-modal.component.html',
    styleUrls: ['./input-modal.component.scss'],
    imports: [ReactiveFormsModule, FormsModule]
})
export class InputModalComponent implements AfterViewInit, OnDestroy {
  private readonly inputService = inject(InputService);

  private readonly form = viewChild.required<NgForm>('form');
  private readonly modalElement = viewChild.required<ElementRef<HTMLDivElement>>('modal');
  private readonly inputElement = viewChild.required<ElementRef<HTMLInputElement>>('input');

  private _options?: InputOptions
  private modal?: Modal

  constructor() {
    this.inputService.setUI(this)
  }

  ngAfterViewInit() {
    this.modal = new Modal(this.modalElement().nativeElement, {})
  }

  ngOnDestroy() {
    this.modal?.dispose()
    delete this.modal
  }

  get options() {
    return this._options
  }

  show(options: InputOptions): void {
    this._options = options
    this.form().resetForm()
    this.form().setValue({input: options.initial || ''})
    this.modal?.show()
    this.inputElement()!.nativeElement.select()
    this.inputElement()!.nativeElement.focus()
  }

  onOK() {
    this.modal?.hide()
    this.options!.callback(this.form().value.input)
  }
}
