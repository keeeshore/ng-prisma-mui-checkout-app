import { Injectable } from '@angular/core';
import {Config, HttpService} from "../http/http-service.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, Subscription, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

export interface IProduct {
  blend_name?: string;
  id: string;
  uid: string;
  added_to_cart?: boolean;
}

export class Product implements IProduct {
  blend_name: string = '';
  id: string = '';
  uid: string = '';
  added_to_cart: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private httpClient: HttpClient, private httpService: HttpService) {

  }

  clear() {
    this.products = [];
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }

  get(url: string, options: Config): Observable<Product[]> {
    // let response = [];
    return this.httpClient
      .get<Product[]>(url, options)
      .pipe(catchError((err: HttpErrorResponse) => {
        return this.handleError(err);
      }));
    // this.http.get(url, options)
    //   .subscribe(
    //     (res: any) => {
    //       console.log("get: response = ", res);
    //     },
    //     (err: any) => {
    //       console.log("get: err = ", err);
    //       return err;
    //     },
    //     () => {
    //       console.log("get: complete = ");
    //     },
    //   );
  }

  add(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
