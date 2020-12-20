import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our custom page components
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'hero/:id', // the :id parameter is a variable that you can pass into the URL
    component: HeroComponent, // The HeroComponent is going to be a template for displaying data
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
