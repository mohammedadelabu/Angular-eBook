import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sam-search',
  templateUrl: './sam-search.component.html',
  styleUrls: ['./sam-search.component.css']
})
export class SamSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSearchValue: string = '';

  @Output() searchEmit: EventEmitter<string> = new EventEmitter<string>();

  onSearchRadio(){
    this.searchEmit.emit(this.selectedSearchValue);
  }

}
