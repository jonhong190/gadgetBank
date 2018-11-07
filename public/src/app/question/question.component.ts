import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  signUpPrompt:any;
  regErrors: any;
  newUser: any;
  closeResult:string;
  logUser: any;
  loginErrors: any;
  order:any;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private modalService:NgbModal
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
    this.newUser = { first_name: "", last_name: "", email: "", password: "", username: "", admin: false };
    this.logUser = { email: "", password: "" };

    this.getProductByTitle();
    this.getSize();
    this.getCarrier();
  }


  getProductByTitle(){
    console.log(this.productTitle['path']);
    this._httpService.getAllProductsLikeTitle(this.productTitle['path']).subscribe(data=>{
      this.product = data[0];
      console.log("HEREE", data);
      
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
  apply(){
    this._httpService.getSession().subscribe(data=>{
      console.log("IN SUBMIT HERE", data);
      if(data['errors']){
        this.signUpPrompt = "Please click here to register with us before proceeding"
      } else {
        this._httpService.getThisCustomer(data['user']).subscribe(user=>{
          console.log("USER", user)
          this.addProductToOrder(user[0])
        })
        
      }
    })

  }
  
  addProductToOrder(logUser){
    console.log("IN ADD PRODUCT TO  ORDER", logUser)
    let order = {total_payment: this.currentPrice.price_value, user_id:logUser.id};
    //check for any active orders
    this._httpService.getActiveOrderByUserId(logUser.id).subscribe(result=>{
      console.log("active order", result);
      //if active post a new order
      if(result['errors'] == "no active order found"){
        this._httpService.postNewOrder(logUser.id, order).subscribe(data => {
          this.product['price'] = this.currentPrice;
          this._httpService.postNewProductToNewOrder(data['id'], this.product).subscribe(newData => {
            console.log("order with product add", newData);
            this.modalService.dismissAll();
            this._router.navigate(['/portal/' + logUser.username]);
          })
        })
        //else add to active order
      } else {
        this.product['price'] = this.currentPrice.id;
        this._httpService.postNewProductToActiveOrderByUserId(logUser.id, this.product).subscribe(result=>{
          console.log("active order add", result);
          this.modalService.dismissAll();
          this._router.navigate(['/portal/' + logUser.username]);
        })
      }
    })


    
  }

  registerUser(newUser) {
    console.log("in register")
    this._httpService.postNewCustomer(newUser).subscribe(data => {
      console.log("after service", data);
      if (data['errors']) {
        console.log(data)
        this.regErrors = data['errors'];
        return;
      }
      this.addProductToOrder(data);
    })

  }
  loginUser(user) {
    // user = this.logUser;
    console.log(user)
    this._httpService.postLoginCustomer(user).subscribe((data) => {
      console.log(data)
      if (data['errors']) {
        this.loginErrors = data['errors'];
        return;
      }
      else {
        this.addProductToOrder(data[0]);
      }
    })
  }

  open(content){
    this.modalService.open(content, {ariaLabelledBy:'modal-basic-title'}).result.then(result=>{
      this.closeResult = 'Closed with: ${result}';
    }, (reason)=>{
      this.closeResult='Dismissed ${this.getDismissReason(reason)}';
    });
  }
  private getDismissReason(reason:any):string {
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
}
