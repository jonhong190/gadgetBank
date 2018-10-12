import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProduct:any;
  @Output() backToProduct = new EventEmitter();
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editProduct = {}
  }

  goBackToProducts() {
    this.backToProduct.emit("data");
  }
}
