//input.component.ts

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() outputMessage: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }

  addResult(input: string) {
    this.outputMessage.emit(input);
  }
}
