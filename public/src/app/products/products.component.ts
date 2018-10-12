import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  @Output() sendProduct = new EventEmitter;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.allProducts();

  }

  allProducts(){
    this._httpService.getAllProducts().subscribe((data)=>{
      this.products = data;
      console.log(data);
    })
  }
  showEdit(product_id) {
    this._httpService.getOneProduct(product_id).subscribe(data => {
      this.sendProduct.emit(data);
    })
  }


}
