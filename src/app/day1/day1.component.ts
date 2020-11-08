import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
  totalItems: number = 0;
  subTotal: number = 0;
  promoCode: string = "";
  discount: number = 1;
  products: Product[] ;
  constructor(public prodService:ProductService) {
    this.products = this.prodService.productService;
  }

  initProduct(){
    this.totalItems = 0;
    this.subTotal = 0;
    for (let item of this.products) {
      this.totalItems += item.quantity;
      this.subTotal += item.quantity * item.price;
    }
  }
  hanleUpdateProduct(products: Product){
    this.totalItems = 0;
    this.subTotal = 0;
    for (let item of this.products) {
      if(item.id == products.id){
        this.totalItems += products.quantity;
        console.log("AAAAAAAAAAAA"+products.quantity);
        this.subTotal += products.quantity * products.price;
      }else{
        this.totalItems += item.quantity;
        this.subTotal += item.quantity * item.price;
      }
    }
  }
  hanlePromoCode(code:string ){
    console.log("AAAAAAAAAAAA|"+code);
    if(code == 'abc'){
      this.discount = 0.1;
    }else if(code == 'xyz'){
      this.discount = 0.2;
    }else {
      alert("ma khuyen mai ko dung");
      this.discount = 1;
    }
  }
  hanleReloadProduct(){
    this.products = this.prodService.productService;
    this.initProduct();
  }
  hanleRemoveProduct(id: number) {
    if (confirm('Are you sure to delete ' + id)) {
      this.products = this.products.filter(item => item.id !== id);
      this.initProduct();
    }
  }

  ngOnInit(): void {
    this.initProduct();
  }
}
