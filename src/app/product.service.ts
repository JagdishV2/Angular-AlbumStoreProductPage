import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpResponse } from '@angular/common/http';
import { Album } from './class/album';
import { Product } from './class/product';



import { Observable,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';


  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map(response => <Album>response.json()));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).pipe(map(response => <Product[]>response.json()));
  }

}
