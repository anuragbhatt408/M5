import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  imgUrl:string = "../assets/images/katie-zaferes.png";
  iconUrl:string = "../assets/images/star.png";
  constructor() { }

  ngOnInit(): void {
  }

}
