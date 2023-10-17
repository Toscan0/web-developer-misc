import { Component, Input } from '@angular/core';
import IDatabase from '../../../utils/interfaces/IDatabase';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  template: `
    <section class="itemCard">
      <img class="photo" [src]="item.photo" alt="photo of {{ item.name }}" />
      <section class="details">
        <h2 class="heading">{{ item.name }}</h2>
        <div class="description">{{ item.description }}</div>
      </section>
    </section>
  `,
  styleUrls: ['./itemCard.component.scss'],
})
export default class ItemCard {
  @Input() item!: IDatabase;
}
