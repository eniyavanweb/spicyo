import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurclientComponent } from './ourclient/ourclient.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'ourclient',component:OurclientComponent},
  {path:'contact',component:ContactComponent}

]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurclientComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatIconModule,MatButtonModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
