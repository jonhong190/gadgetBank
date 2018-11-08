import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  products:any;
  session:any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkforSession();

  }

  getAllProducts(){
    this._httpService.getAllProducts().subscribe(data=>{
      this.products = data;
    })
  }

  checkforSession(){
    this._httpService.getSession().subscribe(data=>{
      if(data['errors']){
        this.session = null;
      } else {
        this.session = data;
      }
    })
  }
  logout(){
    console.log("here")
    this._httpService.deleteSession().subscribe(data=>{
      console.log(data)
      this._router.navigate(['/landing']);
    })
  }

}
