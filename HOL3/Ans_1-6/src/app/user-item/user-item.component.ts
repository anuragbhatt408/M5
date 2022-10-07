import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  imgUrl: string = 'https://picsum.photos/640/360'; 

  handleClick () {
    console.log("clicked...")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
