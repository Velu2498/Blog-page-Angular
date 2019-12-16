import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ar:ActivatedRoute) {
    console.log(ar.snapshot)
    console.log(ar.snapshot.params)
    console.log(ar.snapshot.params.id)
    console.log(ar.snapshot.params.name)
    console.log(ar.snapshot.params.nan)
   }

  ngOnInit() {
  }

}
