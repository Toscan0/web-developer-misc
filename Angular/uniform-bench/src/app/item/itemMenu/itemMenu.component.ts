import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ItemCard from '../itemCard/itemCard.component';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [ItemCard, CommonModule],
  template: `
    <section class="menu">
      <app-item-card *ngFor="let item of items" [item]="item" />
    </section>
  `,
  styleUrls: ['./itemMenu.component.scss'],
})
export class ItemMenuComponent {
  items: IDatabase[] = [];
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  constructor() {
    this.items = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        description: 'Chicago',
        photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        division: 'ALL',
      },
    ];
  }
}
