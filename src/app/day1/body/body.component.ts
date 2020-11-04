import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  price1: number = 4.23;
  price2: number = 5.49;
  item1: number = 1;
  item2: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
