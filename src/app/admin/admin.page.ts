import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Product[];
  selectedProductArray: Product[] = [];

  constructor(
    private productService: ProductsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.products = this.productService.getAllProducts();
  }

  deleteAlert(){
    if(this.selectedProductArray.length > 0){
      this.presentAlert();
    }
    else{
      this.presentToast();
    }
  }

  deleteSelectedProduct(){
    for(let idx = 0; idx < this.selectedProductArray.length; idx++){
      this.productService.deleteProduct(this.selectedProductArray[idx].id);
    }
    this.router.navigate(['/home']);
  }

  selectProduct(event, product: Product, slidingItem: IonItemSliding){
    if(event.target.checked == true){
      this.selectedProductArray.push(product);
    }
    else{
      let newArray = this.selectedProductArray.filter(function(el) {
        return el.id !== product.id;
      });
      this.selectedProductArray = newArray;
    }
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete all of the selected products?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteSelectedProduct()
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Please select at least one product.',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });
  
    await toast.present();
  }

}
