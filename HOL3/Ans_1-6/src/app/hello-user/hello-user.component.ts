import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {

  name : string;
  age: number;
  gender: string;

  constructor() {
    this.name = "Anurag";
    this.age = 22;
    this.gender = "Male";
   }

  ngOnInit(): void {
  }

}
