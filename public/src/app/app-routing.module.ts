import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BrowseComponent} from './browse/browse.component';
import {ListingComponent} from './listing/listing.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:HomepageComponent},
  {path:'browse',component:BrowseComponent},
  {path:'browse/:id',redirectTo:'listing'},
  {path:'browse/browse',redirectTo:'browse'},
  {path:'listing',component:ListingComponent},
  {path:'listing/browse',redirectTo:'browse'},
  {path:'listing/home',redirectTo:''},
  {path:'listing/listing',redirectTo:'listing'},
  {path:'landing',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
