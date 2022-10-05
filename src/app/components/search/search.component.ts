import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cep } from 'src/app/cep';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  search = '/assets/search.png';

  constructor() { }

  ngOnInit(): void { }

  public searchCep(value: string) {
    this.emmitSearch.emit(value);
  }
}
