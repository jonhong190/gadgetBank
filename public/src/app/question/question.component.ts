import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  productTitle:any;
  productSize:any;
  productCarrier:any;
  product:any;
  isNew:any ;
  sealed:any;
  activated:any;
  power:any;
  defects:any;
  crackedFront: any;
  crackedBack: any;
  dead: any;
  currentPrice: any;
  sizeId:any;
  carrierId:any;



  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this._route);
    this.productTitle = this._route['url']['value'][0];
    this.productSize = this._route['url']['value'][1];
    this.productCarrier = this._route['url']['value'][2];
    this.isNew = {value:""};
    this.sealed={value:""};
    this.activated = {value:""};
    this.power={value:""};
    this.defects = {value:""};
    this.crackedFront = {value:""};
    this.crackedBack= {value:""};
    this.getProductByTitle();
    this.getSize();
    this.getCarrier();
  }

  getProductByTitle(){
    console.log(this.productTitle['path']);
    this._httpService.getAllProductsLikeTitle(this.productTitle['path']).subscribe(data=>{
      this.product = data[0];
      console.log(data);
      
    })
  }
  getSize(){
    this._httpService.getOneSizeByValue(this.productSize).subscribe(data=>{
      this.sizeId=data[0].id;
      console.log("size", data);
    })
  }
  getCarrier(){
    this._httpService.getOneCarrierByName(this.productCarrier).subscribe(data=>{
      this.carrierId=data[0].id;
      console.log("carrier", data)
    })
  }
  getPrice(condition_id){
    this._httpService.getPriceByAllConditions(this.product.id, this.sizeId, condition_id, this.carrierId, this.product.category_id).subscribe(data=>{
      this.currentPrice = data;
      console.log(data);
    })
  }
  getPriceMinus(condition_id){
    this._httpService.getPriceByAllConditions(this.product.id, this.sizeId, condition_id, this.carrierId, this.product.category_id).subscribe(data => {
      data['price_value'] -= data['minus_value'];
      this.currentPrice = data;
      console.log(data);
    })
  }
  onSubmit(){
    

  }
}
