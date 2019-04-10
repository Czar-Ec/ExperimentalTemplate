import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from '../components/content/demo-page/demo-page.component';
import { AboutPageComponent } from '../components/content/about-page/about-page.component';

const routes: Routes = [
  // automatically reroute to home when just the base URL is given
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  { path: 'demo', component: DemoPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
