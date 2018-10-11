import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  home:any = null;
  order:any = null;
  product:any = null;
  customer:any = null;
  setting:any = null;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goHome();

  }

  goHome(){
    this.home = "home";
    this.product=null;
    this.order=null;
    this.customer=null;
    this.setting=null;
  }
  goProduct(){
    this.product = "product";
    this.home= null;
    this.order=null;
    this.customer=null;
    this.setting=null;
  }
}
