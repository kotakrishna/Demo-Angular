import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
const routes: Routes = [
  {
    path: '',
    // redirectTo: '/login',
    pathMatch: 'full',
    component: LoginPageComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'news/:id', component: NewsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
