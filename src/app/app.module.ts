import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {DataService} from './core/services/data.service';
import { ProductService } from './core/services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductDescComponent} from '../app/product-desc/product-desc.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDescComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService, {passThruUnknownUrl:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
