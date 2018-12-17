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
  activeOrder:any;
  activeProducts:any;
  activeProductList:any = [];
  shipping:any;
  allAddresses:any;
  noAddress: boolean = true;
  closeResult:string;
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR', 'PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  allOrders:any =[];
  activeAddress:any;
  noProducts:any;
  shippingLabel:any;



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
      if(data['errors']){
        this._router.navigate(['/landing']);
      } else {
        this.getActiveUserOrder(data['user']);
        this._httpService.getThisCustomer(data['user']).subscribe(data=>{
          this.getAllUserOrders(data[0]['id']);
          
        })
        
      }
    })
  }
  getAllUserOrders(user){
    this._httpService.getNonActiveOrdersByUserId(user).subscribe(data=>{
      if(!data['errors']){
        this.allOrders = [];
        for (var i in data) {
          let order = data[i];
          //request to easpost to obtain shipping info
          this._httpService.getShipmentById(data[i]['shipment_id']).subscribe(shipment => {
            order['label'] = shipment['postage_label']['label_url'];
            order['carrier'] = shipment['rates'][0]['carrier'];
            order['tracking'] = shipment['tracking_code'];
            this.allOrders.push(order)
          })

        }
      }
     
    })
  }

  getActiveUserOrder(user){
    let tempPrice = 0;
    //get user
    this._httpService.getThisCustomer(user).subscribe(data=>{
      this.user = data;
      console.log("data", data)
      this._httpService.getAllAddressesByUserId(data[0]['id']).subscribe(add=>{
        this.allAddresses=add;
      })
      //get all orders
      this._httpService.getActiveOrderByUserId(data[0]['id']).subscribe(order=>{
        //if no errors and active order is found
        this.activeOrder = order[0];
        if(!order['errors']){
          for (var i in order) {
            if (order[i]['active'] == true) {
              //get all products in active order
              this._httpService.getAllProductsByOrderId(order[i]['id']).subscribe(products => {
                if(products['errors']){
                  this.noProducts = "Nothing here...";
                  return;
                }
                for (var j in products) {
                  this._httpService.getOneProduct(products[j]['product_id']).subscribe(product => {
                    //get price for each product
                    this._httpService.getOnePriceById(products[j]['price_id']).subscribe(price => {
                        product['price'] = price[0]['price_value'];
                        //get size for each product
                      this._httpService.getOneSize(price[0]['size_id']).subscribe(size => {
                        product['size'] = size[0]['value'];
                      });
                      //get carrier for product
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
          
          console.log("active products",this.activeProductList)
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
  openNewWindow(link){
    window.open(link,"_blank")
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
       console.log("LABEL HERE", data);
      //  this.shippingLabel = data['label'];
       this.checkforSession();

      })
  }


  logout(){
    this._httpService.deleteSession().subscribe(data=>{
      this._router.navigate(['/landing']);
    })
  }

  //function will delete product from cart then re calls original session function to refresh product lsit
  removeCartItem(product_id,price_value){
    this._httpService.postDeleteOneOrderProduct(product_id, this.activeOrder[0]['id'], { "price": price_value }).subscribe(data=>{
      console.log("here")
      this.checkforSession();
    })

  }


}
