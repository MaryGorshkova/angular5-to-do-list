import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onApplySearch(search: string) {
    console.log(search);
    this.onSearch.emit(search);
  }
}
