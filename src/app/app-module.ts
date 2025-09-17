import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PamojaKenyaComponent } from './pamoja-kenya/pamoja-kenya.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';


import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Shares } from './shares/shares';
import { Beneficiaries } from './beneficiaries/beneficiaries';
import { Membership } from './membership/membership';
import { Home } from './home/home';
import { SingleApplication } from './single-application/single-application';
import { DoubleApplication } from './double-application/double-application';
import { Payments } from './payments/payments';

@NgModule({
  declarations: [
    App,
    PamojaKenyaComponent,
    Contact,
    About,
    Login,
    Logout,
    Shares,
    Beneficiaries,
    Membership,
    Home,
    SingleApplication,
    DoubleApplication,
    Payments
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
     MatTableModule,
    
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
