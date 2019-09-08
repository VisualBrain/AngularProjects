import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from './iproduct';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';
  _listFilter: string;
  constructor(private productService: ProductService) {
    // this.listFilter = 'cart';
  }
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log(value);
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [] ;
  ngOnInit(): void {
    console.log('In Oninit');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Destroy Hooks is called');
  }
   toggleImage = (): void => {
     this.showImage = !this.showImage;
   }
 // filtering the product by productName -> entered data is matched against productName
// -> if product Name matches then that product is included into filteredProductList
  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
    console.log('The message is get' + message);
  }
}
