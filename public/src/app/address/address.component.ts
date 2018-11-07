import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  closeResult: string;
  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  address:any;
  user:any;
  address_error:any;
  @Input() getUser: any;
  @Output() sendAddress = new EventEmitter();



  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.address = {name:"", street1:"", street2:"", city:"", state:"", zip:"", country:"USA"};
    console.log(this.getUser);
  }


  submitNewAddress(address){
    console.log("in address", address)
    address['user_id'] = this.getUser[0].id;
    this._httpService.postNewAddressToUser(address, this.getUser[0].id).subscribe(data=>{
      console.log(data);
      if(data['errors']){
        this.address_error="error"
      } 
      this.sendAddress.emit(data);
      this.modalService.dismissAll();
    })
   
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = 'Closed with:${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissreason(reason)}';
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
}
