import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: 'News', component: NewsListComponent
}, {
  path: 'Profile', component: ProfileComponent
  }
  , {
    path: 'Login', component: LoginComponent
  }
  , {
  path: '', component: MainPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
