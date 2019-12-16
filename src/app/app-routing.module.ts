import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { CreatblogComponent } from './creatblog/creatblog.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
{
    path:"",
    component:LoginComponent,
}, 
{
  path:"home",
  component:BlogpageComponent,
},
{
  path:"createblog",
  component:CreatblogComponent,
},
{
  path:"product/:id/:name/:nan",
  component:ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
