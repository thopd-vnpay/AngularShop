import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productService: Product[] = [
    {
      id: 1,
      name: 'fsfssss',
      desciption: 'dggd',
      image: 'https://via.placeholder.com/200x150',
      price: 12,
      quantity: 9,
    },
    {
      id: 2,
      name: 'fsfssss',
      desciption: 'dggd',
      image: 'https://via.placeholder.com/200x150',
      price: 23,
      quantity: 84,
    },
    {
      id: 3,
      name: 'fsfssss',
      desciption: 'dggd',
      image: 'https://via.placeholder.com/200x150',
      price: 23,
      quantity: 84,
    }
  ];
  constructor() { }
}
