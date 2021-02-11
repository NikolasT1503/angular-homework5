import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess-black-square',
  templateUrl: './black-square.component.html',
  styleUrls: ['./black-square.component.css']
})
export class BlackSquareComponent implements OnInit {
  blackColor: string = 'background-color: #b58863';

  constructor() { }

  ngOnInit(): void {
  }

}
