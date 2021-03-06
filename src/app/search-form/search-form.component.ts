import { EventEmitter,Output } from '@angular/core'
import { Component, OnInit } from '@angular/core';
 

@Component({

  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  

  searchTerm: string
  @Output() searchProf = new EventEmitter<any>();

  search() {
    this.searchProf.emit(this.searchTerm)
    this.searchTerm = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
