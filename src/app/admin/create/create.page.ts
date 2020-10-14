import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: FormGroup;
  createdProduct: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      jenis: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      foto: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      merek: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(5)]
      }),
      stok: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      jumlah_core: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      jumlah_thread: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      merek_processor: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  onSubmit(){
    var lastProductId = this.productService.getLastProductId();;
    lastProductId = lastProductId.substr(1);
    lastProductId = 'I' + (Number(lastProductId) + 1);

    this.form.value.id = lastProductId;

    var arrayFoto = this.form.value.foto.split(",");
    for (var i = 0; i < arrayFoto.length; i++) {
      arrayFoto[i] = arrayFoto[i].trim()
    }
    this.form.value.foto = arrayFoto;
    
    this.createdProduct = new Product(this.form.value);
    this.productService.addProduct(this.createdProduct);
    this.router.navigate(['/admin']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Product Berhasil Ditambahkan',
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
