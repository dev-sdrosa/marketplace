import { Component, Input } from '@angular/core';
import { ItemCard } from '../../schemas/item-card.schema';

@Component({
  selector: 'app-item-card-demo',
  templateUrl: './item-card-demo.component.html',
  styleUrls: ['./item-card-demo.component.scss']
})
export class ItemCardDemoComponent {
  
	@Input()
	item: ItemCard;
	
}
