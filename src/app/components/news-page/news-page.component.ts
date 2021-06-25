import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {
  article: any;
  data: any;
  constructor(private location: Location) {
    this.data = this.location.getState();
    this.article = this.data.data;
    console.log(this.article);
  }

  ngOnInit(): void {
    // console.log(this.location.getState());
  }
}
