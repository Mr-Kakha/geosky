import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer.component';
import { AccountComponent } from './account.component';
import { AccountCardComponent } from './account-card.component';
import { AccountEditComponent } from './account-edit.component';
import { AddNewPostComponent } from './add-new-post.component';
import { LoginFormComponent } from './login-form.component';
import { RegistrationFormComponent } from './registration-form.component';
import { TermsComponent } from './terms.component';
import { VerifyEmailComponent } from './verify-email.component';
import { ToursComponent } from './tours.component';
import { TourItemComponent } from  './tour-item.component';
import { TourDetailComponent } from './tour-detail.component';
import { TourListComponent } from './tour-list.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { landingPage } from './landing-page.component';
import { CommunityComponent } from './community.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    AccountCardComponent,
    AccountEditComponent,
    AddNewPostComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    TermsComponent,
    VerifyEmailComponent,
    ToursComponent,
    TourItemComponent,
    TourDetailComponent,
    TourListComponent,
    landingPage,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
