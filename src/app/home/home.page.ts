import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[];
  boolGrid: boolean = false;

  constructor(
    private productService: ProductsService,
  ) {}

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.products = this.productService.getAllProducts();
  }

  changeViewType(){
    this.boolGrid = !this.boolGrid;
  }
}
