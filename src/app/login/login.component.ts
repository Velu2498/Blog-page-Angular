import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("updated from onchanges in login")
  }
  
  ngDoCheck(){
    console.log("updated from oncheck in login")
  }

  ngOnDestroy(){
    console.log("welcome to my blog")
  }

}
