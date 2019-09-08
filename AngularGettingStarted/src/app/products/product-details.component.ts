import { Component, OnInit } from '@angular/core';
import {IProduct} from './iproduct';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  constructor(private  activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    // parameter is provided as a string so we write +(plus) sign at the beginning.
    // The + is a javascript shortcut to convert the parameter string to number
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    };
  }
  onBack = () => {
    this.router.navigate( ['/products']);
  }

}
// to go to the previous page we used Router Service
