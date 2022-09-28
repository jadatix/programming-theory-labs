import { Component, OnInit } from '@angular/core';

let newsList = [{
  id: 1,
  title: 'Lorem Ipsum',
  date: 'today',
  description: 'lorem ipsum description'
}, {
  id: 2,
  title: 't2',
  date: 'today',
  description: 'lorem ipsum description'
}, {
  id: 3,
  title: 't3',
  date: 'today',
  description: 'lorem ipsum description'
},]

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor() { }
  newsList = newsList

  ngOnInit(): void {
  }

}
