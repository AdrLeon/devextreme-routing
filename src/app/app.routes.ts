import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: 'first',
    children: [
      {
        path: 'first',
        children: [{
            path: 'first',
            component: FirstComponent
          }
        ]
      }
    ]
  },
  {
    path: 'second',
    children: [
      {
        path: 'second',
        children: [{
            path: 'second',
            component: SecondComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
