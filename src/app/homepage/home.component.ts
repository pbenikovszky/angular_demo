import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = 'Angular demo page'

  constructor() { }

  ngOnInit(): void {
  }

}