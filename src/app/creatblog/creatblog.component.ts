import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, AbstractControl, MinLengthValidator} from '@angular/forms';
import { DadaserviceService } from '../dadaservice.service';
import {Router} from'@angular/router'

@Component({
  selector: 'app-creatblog',
  templateUrl: './creatblog.component.html',
  styleUrls: ['./creatblog.component.css']
})
export class CreatblogComponent implements OnInit {

  constructor(private b:DadaserviceService ,private r:Router) {
   }

  ngOnInit() {
  }
  
  form = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    content: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,this.cusval]),
    imglink:new FormControl('',[]),
  });
  


  fun(){
    console.log(this.form.value)
    this.b.list.push(this.form.value)
    console.log(this.b.list)
    this.form.reset();
    this.r.navigate(['/home'])   
  }
  
  // cusval(control:AbstractControl):{[key:string]:any} | null {
  //   let email:string=control.value;
  //   if(email.toLocaleLowerCase()==="velu020498@gmail.com"){
  //     return null;
  //   }
  //   else{
  //     return {val:false};
  //   }
  //   }

  cusval(control: AbstractControl) {
    let email:string=control.value;

    if (email === "velu020498@gmail.com") {
      return null;
    }

    return  { vn: true };
  }


  ngOnChanges(){
    console.log("updated from onchanges in form")
  }
  
  ngDoCheck(){
    console.log("updated from oncheck in form")
  }


}

// export function ValidateUrl(control: AbstractControl) {
//   let email:string=control.value;
//   if (email!=="velu020498@gmail.com") {
//     return { validUrl: true };
//   }
//   return null;
// }

