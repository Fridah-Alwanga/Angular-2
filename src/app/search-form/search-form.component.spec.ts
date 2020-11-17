// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SearchFormComponent } from './search-form.component';

// describe('SearchFormComponent', () => {
//   let component: SearchFormComponent;
//   let fixture: ComponentFixture<SearchFormComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SearchFormComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

