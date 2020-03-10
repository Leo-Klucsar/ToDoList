import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todo;
  public inputData;

  constructor() { 
    this.todo = [];
  }

  ngOnInit(): void {
  }

  add(){
    this.todo.push(this.inputData);
  }

  delete(index) {
    this.todo.splice(index,1);
  }
}
