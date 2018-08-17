import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk';


import { AppComponent } from './app.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { MongoComponent } from './mongo/mongo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SignUpService } from './services/sign-up.service';
import { TransferService } from './services/transfer.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: InsertProductComponent },
  { path: 'products', component: MongoComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'custom-element', component: CustomElementComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    AdminComponent,
    LoginComponent,
    MongoComponent,
    InsertProductComponent,
    UpdateComponent,
    HeaderComponent,
    CustomElementComponent,
    AlertComponent,
    SignUpComponent,
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
    UpdateService,
    SignUpService,
    AuthService,
    AuthGuardService,
    TransferService

  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
