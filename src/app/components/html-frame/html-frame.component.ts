import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-html-frame',
  templateUrl: './html-frame.component.html',
  styleUrls: ['./html-frame.component.scss']
})
export class HtmlFrameComponent implements OnInit {
  message : string = '';
  constructor(private calculationService: CalculationService) { }
  ngOnInit(): void {
  }
  ResultHandler(event: string) {
    this.message = this.calculationService.calculate(event);
  }
}
