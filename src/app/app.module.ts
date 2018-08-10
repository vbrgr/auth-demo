import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { MongoComponent } from './mongo/mongo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { NoAcessComponent } from './no-acess/no-acess.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';


import { FetchService } from './services/fetch.service';
import { InsertService } from './services/insert.service';
import { UpdateService } from './services/update.service';
import { HeaderComponent } from './header/header.component';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { AlertComponent } from './alert/alert.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: InsertProductComponent },
  { path: 'products', component: MongoComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'custom-element', component: CustomElementComponent },
  { path: 'no-acess', component: NoAccessComponent },
  { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent,
    NoAcessComponent,
    NoAccessComponent,
    AdminComponent,
    LoginComponent,
    MongoComponent,
    InsertProductComponent,
    UpdateComponent,
    HeaderComponent,
    CustomElementComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [
    FetchService,
    InsertService,
    UpdateService

  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
