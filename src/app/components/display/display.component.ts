//display.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() input: string =""
  @Output() outputMessage: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }

  addResult(input: string) {
    this.outputMessage.emit(input);
  }
}