import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  clickedProduct: Product;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){
        return;
      }

      const productId = paramMap.get('productId');
      this.clickedProduct = this.productService.getProduct(productId);
    })
  }

  goBack(){
    this.navCtrl.navigateBack('/admin');
  }

}
