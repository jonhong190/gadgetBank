import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  newProduct: any;
  allCategories:any;
  @Output() backToProduct = new EventEmitter;
  targetCategory:any;
  constructor(
    private _httpService : HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.newProduct = {title:"", condition:"", manufacturer:"",category_id:"Device Type"};
    this.getAllCategories();
    this.targetCategory="";
  }

  getAllCategories(){
    this._httpService.getCategories().subscribe((data)=>{
      this.allCategories = data;
    })
  }
  goBackToProducts() {
    this.backToProduct.emit("data");
  }
  addProduct(product){
    console.log(product)
    this._httpService.postNewProduct(product).subscribe((data)=>{
      console.log(data)
      this.goBackToProducts();
    })
  }
}
