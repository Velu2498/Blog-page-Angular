import { Component, OnInit,Input } from '@angular/core';
import { DadaserviceService } from '../dadaservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css'],
  providers: [DatePipe]
})

export class BlogpageComponent implements OnInit {
  myDate = new Date();
  
  constructor(private b:DadaserviceService) { 
  }
  ngOnInit() {
  }

  list=this.b.list

}
