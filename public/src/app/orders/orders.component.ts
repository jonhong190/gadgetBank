import { Component, OnInit } from '@angular/core';
import  { HttpService } from '../http.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  allOrders:any;
  
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders(){
    //get all orders
    this._httpService.getAllOrders().subscribe(data=>{
      this.allOrders = data;
      //loop through all orders and set user_id's to user first and last name
      for(let i in data){
        this._httpService.getThisCustomerById(data[i]['user_id']).subscribe(user=>{
          return data[i]['user_id'] = user[0]['first_name'] + " " + user[0]['last_name'];
        });
        //set to yes or no for labelling purposes
        if (data[i]['active'] == true) {
          data[i]['active'] = "No";
        } else {
          data[i]['active'] = "Yes";
        }
      }
      this.getTrackingNumbers();
    })
  };

  getTrackingNumbers(){
    //for each order grab the tracking number from shipment id
    this.allOrders.forEach(o=>{
      if(o.shipment_id){
        this._httpService.getShipmentById(o.shipment_id).subscribe(data=>{
          o['tracking'] = data['tracking_code'];
        })
      }
    })
  }
}
