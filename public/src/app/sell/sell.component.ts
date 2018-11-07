import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  session:any;
  productTitle:any;
  currentModels: any;
  currentCategory: any;
  currentSizes:any;
  currentCarriers:any;
  model:any;
  size:any;
  carrier:any;
  modelErrorMsg:any;
  sizeErrorMsg:any;
  carrierErrorMsg:any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productTitle = this._route['snapshot']['routeConfig']['path'];
    this.getProductsByTitle();
    this.model;
    this.size;
    this.carrier;
    this.getSession();
  }

  getProductsByTitle(){
    console.log(this.productTitle)
    this._httpService.getAllProductsLikeTitle(this.productTitle).subscribe(data=>{
      console.log(data)
      this.currentModels = data;
      this.currentCategory = data[0]['category_id'];
      console.log(this.currentModels);
      console.log(this.currentCategory);
      this.getProductSizes(this.currentCategory);
    })
  }
  getProductSizes(category){ 
    this._httpService.getSizesByCategory(category).subscribe(data=>{
      this.currentSizes = data;
      console.log(data)
      this.getCarriersByCategory(category);
    })
  }
  getCarriersByCategory(category){
    this._httpService.getCarriersByCategory(category).subscribe(data=>{
      this.currentCarriers = data;
    })
  }
  goNext(){
    if(this.model == null || this.size == null || this.carrier == null){
      this.modelErrorMsg = "Please select all options for your product";
      return;
      
    }
    else {
      this.modelErrorMsg = null;
      console.log("passed");
      console.log(this.model);
      let string = this.model.split(" ");
      string = string[0].concat(string[1]);
      console.log(string)
      
      this._router.navigateByUrl("/"+this.model+"/"+this.size+"/"+this.carrier);

    }
  }
  getSession(){
    this._httpService.getSession().subscribe(data=>{
      this.session = data;
      console.log(data)
    })
  }

  
}
