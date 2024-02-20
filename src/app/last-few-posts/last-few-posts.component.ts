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
      imgSrc: '',
    },
    {
      id: 2,
      title: 'Health checkup needed for sister',
      price: '1:09 pm',
      shop: 'Pick the best',
      location: 'Telangana',
      status: 'addressed',
      imgSrc: '',
    },
    {
      id: 2,
      title: 'Health checkup needed for sister',
      price: '1:09 pm',
      shop: 'Pick the best',
      location: 'Telangana',
      status: 'addressed',
      imgSrc: '',
    },
  ];
}
