import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart/cart.service";
import {IProduct, Product} from "../../service/product/product.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.onCartUpdate().subscribe(
      (products: Product[]) => {
        console.log("cart.component res:" , products);
        this.products = products;
        },
      (err: any) => {
        console.error("cart.component err:", err);
      }
    )
  }

}
