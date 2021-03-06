import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './dashboard/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { en_US } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// import { IconsProviderModule } from './icons-provider.module';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';

// registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SidebarComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // BrowserAnimationsModule
    // IconsProviderModule,
    // NzLayoutModule,
    // NzMenuModule
   ],
  // providers: [{ provide: NZ_I18N, useValue: en_US }],
   bootstrap: [AppComponent]
})
export class AppModule { }
