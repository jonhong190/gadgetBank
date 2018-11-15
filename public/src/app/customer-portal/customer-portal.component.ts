import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrls: ['./customer-portal.component.css']
})
export class CustomerPortalComponent implements OnInit {
  user:any;
  allOrders:any;
  activeProducts:any;
  activeProductList:any = [];
  shipping:any;
  allAddresses:any;
  noAddress: boolean = true;
  closeResult:string;
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR', 'PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

  activeAddress:any;
  noProducts:any;



  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.checkforSession();
    
    
  }
  
  checkforSession(){
    this._httpService.getSession().subscribe(data=>{
      console.log(data);
      if(data['errors']){
        this._router.navigate(['/landing']);
      } else {
        this.getAllUserOrders(data['user']);
        
      }
    })
  }
  getAllUserOrders(user){
    let tempPrice = 0;
    //get user
    this._httpService.getThisCustomer(user).subscribe(data=>{
      this.user = data;
      this._httpService.getAllAddressesByUserId(data[0]['id']).subscribe(add=>{
        this.allAddresses=add;
      })
      //get all orders
      this._httpService.getActiveOrderByUserId(data[0]['id']).subscribe(order=>{
        //if no errors and active order is found
        this.allOrders = order;
        if(!order['errors']){
          for (var i in order) {
            if (order[i]['active'] == true) {
              this._httpService.getAllProductsByOrderId(order[i]['id']).subscribe(products => {
                if(products['errors']){
                  this.noProducts = "Your Cart is empty";
                  return;
                }
                for (var j in products) {
                  this._httpService.getOneProduct(products[j]['product_id']).subscribe(product => {
                    this._httpService.getOnePriceById(products[j]['price_id']).subscribe(price => {
                      this._httpService.getOneSize(price[0]['size_id']).subscribe(size => {
                        product['size'] = size[0]['value'];
                      });
                      this._httpService.getOneCarrier(price[0]['carrier_id']).subscribe(carrier => {
                        product['carrier'] = carrier[0]['carrier_name'];
                      })
                    })
                    this.activeProductList.push(product);
                  })
                }
              })
            }
          }
          
          console.log(this.activeProductList)
        } else {
          this.noProducts = "Your Cart is empty";
        }
      })  
    })
  }
  open(content){
    this.modalService.open(content, {ariaLabelledBy:'modal-basic-title'}).result.then((result)=>{
      this.closeResult = 'Closed with:${result}';
    }, (reason)=>{
      this.closeResult = 'Dismissed ${this.getDismissreason(reason)}';
    });
 
  }
  private getDismissReason(reason:any):string {
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
  goShipping(){
    this.shipping = "shipping";
    
  }
  

  getAddress(e){
    console.log(e);
    this._httpService.getAllAddressesByUserId(this.user[0]['id']).subscribe(data=>{
      this.allAddresses = data;
    })
  }

  selectAddress(address){
    this.noAddress = false;
    this.activeAddress = address;
    
  }

  submitOrder(){
     this._httpService.postFromAddressAndCreateLabel(this.activeAddress, this.user[0].id).subscribe(data=>{
       console.log(data);
     })
  }


  logout(){
    this._httpService.deleteSession().subscribe(data=>{
      this._router.navigate(['/landing']);
    })
  }


}
