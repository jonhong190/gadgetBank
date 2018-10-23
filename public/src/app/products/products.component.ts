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
      
      for(let i in data){
        this._httpService.getOneCondition(data[i]['condition_id']).subscribe(condition=>{ 
          data[i]['condition_id']=condition[0]['description']
        })
      }
      for(let i in data){
        this._httpService.getOneSize(data[i]['size_id']).subscribe(size=>{
          data[i]['size_id']= size[0]['value'];
        })
      }

      this.products = data;
      console.log(data);
    })
  }
  showEdit(product_id) {
    this._httpService.getOneProduct(product_id).subscribe(data => {
      this.sendProduct.emit(data);
    })
  }
  showAdd(){
    this.sendAddProduct.emit("show");
  }


}
