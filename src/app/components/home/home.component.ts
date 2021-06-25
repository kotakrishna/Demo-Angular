import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: any;
  article = {
    author: '',
    content: '',
    url: '',
  };
  constructor() {
    this.articles = [this.article];

    axios
      .get(
        'https://newsapi.org/v2/everything?q=Apple&from=2021-06-25&sortBy=popularity&apiKey=4870445c24e34495a379e4867eaf44cc'
      )
      .then(({ data }) => {
        // console.log(data);
        this.articles = data.articles;
        console.log(this.articles);
      });
  }

  ngOnInit(): void {}
}
