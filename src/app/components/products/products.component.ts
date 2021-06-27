import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {IProduct, Product, ProductService} from "../../service/product/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  async getProducts(size: number) {
    console.log("getProducts:: START");
    this.productService
      .get("https://random-data-api.com/api/coffee/random_coffee", { params: { size }})
      .subscribe(
        (products: Product[]) => {
          console.log("get: response = ", products);
          this.products = products;
          // this.productService.products = res;
          // (res || []).forEach((product: Product) => {
          //   console.log(" response .forEach = ", product);
          //   this.productService.add(product);
          //   // this.products.push(product);
          // });
        },
        (err: any) => {
          console.log("get: err = ", err);
          return err;
        },
        () => {
          console.log("get: complete = ");
        },
      );
  }

  ngOnInit(): void {
    this.getProducts(5);
  }

  ngOnDestroy(): void {
    this.productService.clear();
  }

  ngOnChanges(): void {
    console.log("product.component: ngOnChanges = ");
  }

  addToCart(product: IProduct): void {
    console.log("product.component: addToCart = ", product);
  }


}
