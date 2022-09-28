import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sam-filter',
  templateUrl: './sam-filter.component.html',
  styleUrls: ['./sam-filter.component.css']
})
export class SamFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedRadioButtonValue: string = 'All'

  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  @Output() filterEmit: EventEmitter<string> = new EventEmitter<string>();

  onFilterRadio(){
    this.filterEmit.emit(this.selectedRadioButtonValue);
  }

}
