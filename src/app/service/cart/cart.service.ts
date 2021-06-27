import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject, throwError} from "rxjs";
import {Product} from "../product/product.service";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ordersSubject$ = new BehaviorSubject<Product[]>([]);

  constructor() {
  }

  onCartUpdate(): Observable<any> {
    return this.ordersSubject$.asObservable();
  }

  add(product: Product) {
    const currVal = this.ordersSubject$.getValue();
    this.ordersSubject$.next([...currVal, product]);
  }

  remove(product: Product) {
    console.log("removing product :: ", product.id);
    const currProducts = this.ordersSubject$.getValue();
    console.log("removing product, currProducts:: ", currProducts);
    const indexVal = currProducts.indexOf(product);
    console.log("removing product, indexVal:: ", indexVal);
    if (indexVal !== -1) {
      currProducts.splice(indexVal, 1);
    }
    this.ordersSubject$.next(currProducts);
  }

}
