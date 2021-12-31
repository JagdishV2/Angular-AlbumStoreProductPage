import { Component, OnInit } from '@angular/core';
import { AlbumStorePage } from 'e2e/app.po';
import { Album } from '../class/album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);

  }

}
