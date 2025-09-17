import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { About } from './about/about';
import { Shares } from './shares/shares';
import { Membership } from './membership/membership';
import { SingleApplication } from './single-application/single-application';
import { DoubleApplication } from './double-application/double-application';
import { Payments } from './payments/payments';
import { Beneficiaries } from './beneficiaries/beneficiaries';

const routes: Routes = [
  {path:'contact',component:Contact},
  {path:'',component:Home},
  {path:'about',component:About},
  {path:'shares',component:Shares},
  {path:'membership',component:Membership},
  {path:'single-application',component:SingleApplication},
  {path:'double-application',component:DoubleApplication},
  {path:'payment',component:Payments},
  { path: '', redirectTo: '/single-application', pathMatch: 'full' },
  { path: '**', redirectTo: '/single-application' },
  {path: 'beneficiaries',component:Beneficiaries}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
