import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {LoginComponent} from "./login/login.component"
import { RegsiterComponent } from "./regsiter/regsiter.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  
  
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"update/:id",
    component:UpdateComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegsiterComponent
  },
  {
     path:"list",
     component:ListItemComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
