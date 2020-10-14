import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      // CPU
      id: "I1",
      jenis: "CPU",
      foto: ['https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i9-9900k_3_6ghz_box_02_ad_l.jpg', 'https://adoredtv.com/wp-content/uploads/2019/11/processor-1024x576.jpg'],
      merek: "Intel",
      model: "i9",
      harga: 5000000,
      stok: 5,
      jumlah_core: 8,
      jumlah_thread: 16,
      base_clock: 2.4,
      boost_clock: 5.3
    },
    {
      // GPU
      id: "I2",
      jenis: "GPU",
      foto: ['https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/23/d4cdd53d-43b7-468b-99a3-600afec1de89.jpg.webp', 'https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/11/ce9dc230-27ff-4b46-a49f-b32633f57b10.jpg.webp'],
      merek: "Nvidia",
      model: "GeForce RTX 3070",
      harga: 7000000,
      stok: 3
    },
    {
      // RAM
      id: "I3",
      jenis: "RAM",
      foto: ['https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/7/28462247/28462247_9ef622a0-6fc7-4359-9dec-d1a3dfd1963b_800_800', 'https://cf.shopee.co.id/file/f1a6d2dbfd9a66c93ccea926af7297c2'],
      merek: "Kingston",
      model: "DDR4",
      harga: 600000,
      stok: 10,
      speed: 21000,
      ukuran: 8
    },
    {
      // Motherboard
      id: "I4",
      jenis: "Motherboard",
      foto: ['https://cf.shopee.co.id/file/1a1bb841576a5bb701da9fc8237d8c13', 'https://cf.shopee.co.id/file/5615a82ff6386b4afc2930129649c5d2'],
      merek: "Asus",
      model: "LGA 1155",
      harga: 500000,
      stok: 8,
      chipset: "H61",
      merek_processor: "Intel"
    },
    {
      // GPU
      id: "I5",
      jenis: "GPU",
      foto: ['https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/9/2/9126088/9126088_a759a560-4ca9-4084-8f68-3a662869a357_700_700.webp', 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/7/8/23720755/23720755_fa581c20-7c85-4c00-a843-37f3eda0c994_800_800.webp'],
      merek: "Asus RoG",
      model: "GeForce RTX 2070",
      harga: 8000000,
      stok: 0
    },
  ]

  constructor() { }

  addProduct(addedProduct: Product){
    this.products.push(addedProduct);
  }

  getAllProducts(){
    return [...this.products];
  }

  getProduct(productId: string){
    return{...this.products.find(product => {
      return product.id === productId;
    })};
  }

  getLastProductId(){
    return this.products[this.products.length-1].id;
  }

  updateProduct(updatedProduct: Product){
    let objIndex = this.products.findIndex((product => product.id == updatedProduct.id));
    this.products[objIndex] = updatedProduct;
  }

  deleteProduct(productId: string){
    this.products = this.products.filter(product => {
      return product.id !== productId;
    });
  }
}
