import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Product } from '@app/shared/models/product';
import { ProductService } from '@app/shared/services/product.service';

@Component({
  selector: 'app-pokemon-report',
  templateUrl: './pokemon-report.component.html',
  styleUrls: ['./pokemon-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class PokemonReportComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsWithOrdersSmall()
      .subscribe((data) => (this.products = data));
  }
}
