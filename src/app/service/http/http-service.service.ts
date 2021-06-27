import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


export interface Config {
  headers? : HttpHeaders,
  params?: HttpParams | {[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  async get(url: string, options: Config) {
    return this.http.get<Config>(url, options);
    // let response = {};
    // try {
    //   response = await this.http
    //     .get<Config>(url, options)
    //     .subscribe(
    //       (res: any) => {
    //         console.log("get: response = ", res);
    //         return res;
    //       },
    //       (err: any) => {
    //         console.log("get: err = ", err);
    //         return err;
    //       },
    //       () => {
    //         console.log("get: complete = ");
    //       },
    //     );
    // } catch (err: any) {
    //   console.log("get: catch err = ", err);
    //   response = err;
    // }
    // return response;
  }
}
