import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../service/product/product.service";
import {CartService} from "../../../service/cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product: Product = new Product();

  @Output() addToCartEvent:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.cartService.add(product);
  }

  removeFromCart(product: Product): void {
    this.cartService.remove(product);
  }

}
