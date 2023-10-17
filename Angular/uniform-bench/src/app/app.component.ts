import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import IDatabase from '../../utils/interfaces/IDatabase';
import ItemMenu from './item/itemMenu/itemMenu.component';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [],
  template: `
    <main>
      <app-item-menu />
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
