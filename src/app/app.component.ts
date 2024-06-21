import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,    
    RouterModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'devextreme-routing';

  secondaryRoute(): Routes {
    const a = [{text: 'Go first', path: 'first'}, {text: 'Go second', path: 'second'}];
    return a.map((route) => {
      return {
        title: route.text,
        path: route.path,
      };
    });
  }
}
