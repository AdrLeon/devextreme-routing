import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxListModule, DxTemplateModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,    
    DxListModule,
    DxTemplateModule,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'devextreme-routing';

  secondaryRoute(): DataSource {

    return new DataSource({
      store: new ArrayStore({
        data: [{
          key: 'Group components',
          items: [{text: 'Go first', path: 'first'}, {text: 'Go second', path: 'second'}],
        }],
      }),
      map: (dataItem) => {
        return {
          key: dataItem.key,
          items: dataItem.items,
        };
      },
    });
  }
}
