import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss'],
})
export class IconInputComponent {
  value: any = '';
  imgSrc: string = '';
  visible: boolean = true;
  type: string = '';

  @Input() placeholder: string = '';
  @Input() style: any = '';

  @Output() actualValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  changeVisibility() {
    this.visible = !this.visible;

    if (this.visible) {
      this.type = 'text';
      this.imgSrc = '../../../../assets/img/eye-solid.svg';
    } else {
      this.type = 'password';
      this.imgSrc = '../../../../assets/img/eye-slash-solid.svg';
    }
  }

  updateValue() {
    this.actualValue.emit(this.value);
  }

  ngOnInit() {
    this.changeVisibility();
  }
}
