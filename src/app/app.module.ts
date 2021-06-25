import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    NewsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
