import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-posts',
  templateUrl: './last-few-posts.component.html',
  styleUrls: ['./last-few-posts.component.scss'],
})
export class LastFewPostsComponent {
  transactions = [
    {
      id: 1,
      title: 'Menstruation guide required',
      price: '11:20 Am',
      shop: 'Anisha ',
      location: 'Mahrashtra',
      status: 'pending',
      imgSrc: 'https://img.freepik.com/free-vector/women-climacteric-concept_23-2148653939.jpg?w=1380&t=st=1708595971~exp=1708596571~hmac=2be92818bb59d330c6a1383429049004fd0990e0acaaa884e4884a6051c318c1',
    },
    {
      id: 2,
      title: 'Health checkup needed for sister',
      price: '1:09 pm',
      shop: 'Anjali',
      location: 'Telangana',
      status: 'addressed',
      imgSrc: 'https://img.freepik.com/free-vector/women-climacteric-concept_23-2148653939.jpg?w=1380&t=st=1708595971~exp=1708596571~hmac=2be92818bb59d330c6a1383429049004fd0990e0acaaa884e4884a6051c318c1',
    },
    {
      id: 2,
      title: 'Health checkup needed for sister',
      price: '1:09 pm',
      shop: 'Safeena',
      location: 'Telangana',
      status: 'addressed',
      imgSrc: 'https://img.freepik.com/free-vector/women-climacteric-concept_23-2148653939.jpg?w=1380&t=st=1708595971~exp=1708596571~hmac=2be92818bb59d330c6a1383429049004fd0990e0acaaa884e4884a6051c318c1',
    },
  ];
}
