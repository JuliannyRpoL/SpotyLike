import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'],
})
export class CommonInputComponent {
  value: any = '';

  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() style: any = '';

  @Output() actualValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  updateValue() {
    this.actualValue.emit(this.value);
  }
}
