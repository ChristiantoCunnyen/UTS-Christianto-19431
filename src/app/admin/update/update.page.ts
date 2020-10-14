import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  form: FormGroup;
  clickedProduct: Product;
  updatedProduct: Product;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){
        return;
      }

      const productId = paramMap.get('productId');
      this.clickedProduct = this.productService.getProduct(productId);
    });

    var fotoProductText = "";
    for(let idx = 0; idx < this.clickedProduct.foto.length; idx++){
      fotoProductText += this.clickedProduct.foto[idx] + ", ";
    }
    fotoProductText = fotoProductText.substring(0, fotoProductText.length-2);

    this.form = new FormGroup({
      jenis: new FormControl(this.clickedProduct.jenis, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      foto: new FormControl(fotoProductText, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      merek: new FormControl(this.clickedProduct.merek, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      model: new FormControl(this.clickedProduct.model, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.clickedProduct.harga, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(5)]
      }),
      stok: new FormControl(this.clickedProduct.stok, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(this.clickedProduct.base_clock, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(this.clickedProduct.boost_clock, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      jumlah_core: new FormControl(this.clickedProduct.jumlah_core, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      jumlah_thread: new FormControl(this.clickedProduct.jumlah_thread, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      speed: new FormControl(this.clickedProduct.speed, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ukuran: new FormControl(this.clickedProduct.ukuran, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      chipset: new FormControl(this.clickedProduct.chipset, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      merek_processor: new FormControl(this.clickedProduct.merek_processor, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  onSubmit(){
    var arrayFoto = this.form.value.foto.split(",");
    for (var i = 0; i < arrayFoto.length; i++) {
      arrayFoto[i] = arrayFoto[i].trim()
    }
    this.form.value.foto = arrayFoto;
    
    this.updatedProduct = new Product(this.form.value);
    this.updatedProduct.id = this.clickedProduct.id;
    this.productService.updateProduct(this.updatedProduct);
    this.router.navigate(['/admin']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Product Berhasil Diupdate',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });
  
    await toast.present();
  }

  goBack(){
    this.navCtrl.navigateBack('/admin');
  }
}
