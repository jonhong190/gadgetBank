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
  condition_names:any=[];
  @Output() sendProduct = new EventEmitter;
  @Output() sendAddProduct= new EventEmitter;
  @Output() sendDeleteProduct = new EventEmitter;
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
      console.log(data)
      this.products = data;
      console.log(data);
    })
  }
  //function to get all products
  showEdit(product_id) {
    this._httpService.getOneProduct(product_id).subscribe(data => {
      this.sendProduct.emit(data);
      console.log("IN PRODUCT SHOW EDIT", data)
    })
  }
  //function to emit product Id to the product edit component
  showAdd(){
    this.sendAddProduct.emit("show");
  }
  //function to let dashboard component know to switch ot product add component
  delete(product_id, index) {
    this._httpService.getDeleteOneProduct(product_id).subscribe((data)=>{
      this.sendDeleteProduct.emit("delete");
      this._router.navigate(['/dashboard']);
    });
    
  }
}
