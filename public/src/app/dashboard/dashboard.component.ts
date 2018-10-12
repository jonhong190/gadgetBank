import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  home:any = null; //initialization of variables we will use to switch between sidebar components
  order:any = null;
  product:any = null;
  customer:any = null;
  setting:any = null;
  showEditProduct= null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goHome(); //on first load, show the home screen

  }

  goHome(){
    this.home = "home";
    this.product=null;
    this.order=null;
    this.customer=null;
    this.setting=null;
  } //when called, create a value for variable home and set rest to null
  goOrders(){
    this.order = "order";
    this.home= null;
    this.product = null;
    this.customer = null;
    this.setting = null;
  }//when called, create value for variable order and set rest to null
  goProduct(){
    this.product = "product";
    this.home= null;
    this.order=null;
    this.customer=null;
    this.setting=null;
  }// when called, create value for variable product and set rest to null
  goCustomers(){
    this.customer = "customer";
    this.home=null;
    this.order=null;
    this.setting=null;
    this.product = null;
  }//wen called, create value for variable customer and set rest to null
  goSetting(){
    this.setting="setting";
    this.home=null;
    this.order = null;
    this.product = null;
    this.customer = null;
  }//when called, create value for setting and set rest to null
  getProduct(data){
    console.log("product here" + data['data']);
    this.showEditProduct = data;
    this.home=null;
    this.order= null;
    this.product=null;
    this.customer= null;
    this.setting=null;
  }
  goBack(){
    this.product="product";
    this.home=null;
    this.showEditProduct= null;
    this.order=null;
    this.customer= null;
    this.setting=null;
  }
}
