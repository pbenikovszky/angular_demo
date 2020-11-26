import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {

  pageTitle: string = "Error code: 404"

  constructor(private router: Router) { }

  onBack(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

}
