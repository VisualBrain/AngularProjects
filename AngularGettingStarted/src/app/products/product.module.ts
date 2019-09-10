import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {ProductDetailsComponent} from './product-details.component';
import {RouterModule} from '@angular/router';
import {ProductDetailsGuard} from './product-details.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component : ProductListComponent},
      {path: 'products/:id' , component : ProductDetailsComponent, canActivate : [ProductDetailsGuard] },
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
