import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadaserviceService {

  constructor() { }
  list=[
    {
      Name:"velu",
      imglink:"http://placehold.it/750x300",
      title:"TITLE 01",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
    }
  ]

}
