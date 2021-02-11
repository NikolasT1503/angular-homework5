import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess-white-square',
  templateUrl: './white-square.component.html',
  styleUrls: ['./white-square.component.css']
})

export class WhiteSquareComponent implements OnInit {
  
  whiteColor: string = 'background-color: #f0d9b5';

  constructor() { }

  ngOnInit(): void {
  }

}
