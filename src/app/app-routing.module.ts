import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path :"",
    pathMatch:"full",
    component:SigninComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:'about',
    loadChildren: () => import('./components/about-us/about-us.module').then(mod => mod.AboutUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
