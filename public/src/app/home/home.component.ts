import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProductsBought = 0;
  totalSales = 0;
  allProductsPastMonth = 0
  allProductsBoughtPastSeven = 0;
  allProductsPastQuarter = 0;
  allProductsPastYear = 0;
  allProductsUserInput = 0;
  variableTotalSales = 0;
  pastSevenTotalSales = 0;
  pastMonthTotalSales = 0;
  pastQuarterTotalSales = 0;
  pastYearTotalSales = 0;
  quarter : any;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate:NgbDate;
  rangeError: any;

  constructor(
    private _httpService: HttpService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    this.getAllBoughtProducts();
    this.fromDate = this.calendar.getToday();
    this.getAllBoughtProductsSevenDays();
    this.getAllBoughtProductsPastMonth();
    this.getAllBoughtProductsPastQuarter();
    this.getAllBoughtProductsPastYear();
    
  }

  getAllBoughtProducts(){
    this._httpService.getAllBoughtProducts().subscribe(data=>{
      for(var i in data){
        if (data[i]['price_id']) this.allProductsBought += 1;
        this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price=>{
          if(!price['errors']) this.totalSales += price[0]['price_value']; 
        });
      };
    });
  };

  getAllBoughtProductsSevenDays(){

    this._httpService.getAllBoughtProductsPastSeven().subscribe(data=>{
      for(var i in data){
        if (data[i]['price_id']) this.allProductsBoughtPastSeven +=1;
        this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price=>{
          if(!price['errors']) this.pastSevenTotalSales += price[0]['price_value'];
        })
      }
    })
  };

  getAllBoughtProductsPastMonth(){
    this._httpService.getAllBoughtProductsPastMonth().subscribe(data=>{
      for(var i in data){
        if (data[i]['price_id']) this.allProductsPastMonth += 1;
        this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price=>{
          if(!price['errors']) this.pastMonthTotalSales += price[0]['price_value'];
        })
      }
    })
  }

  getAllBoughtProductsPastQuarter(){
    this._httpService.getAllBoughtProductsQuarter().subscribe(data=>{
      for(var i in data){
        if(data[i]['price_id']) this.allProductsPastQuarter += 1;
        this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price=>{
          if(!price['errors']) this.pastQuarterTotalSales += price[0]['price_value'];
        })
      }
    })
  }

  getAllBoughtProductsPastYear(){
    this._httpService.getAllBoughtProductsPastYear().subscribe(data=>{
      for(var i in data){
        if(data[i]['price_id']) this.allProductsPastYear += 1;
        this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price=>{
          if(!price['errors']) this.pastYearTotalSales += price[0]['price_value']
        })
      }
    })
  }

  onDateSelection(date:NgbDate){
    var today = this.calendar.getToday();
    if(date.day > today.day && date.month == today.month){
      this.rangeError = "Cannot choose a future date!";
      this.toDate = null;
      return;
    }
    if(date.month > today.month){
      this.rangeError = "Cannot choose a future date!";
      this.toDate = null;
      return;
    } else {
      if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
      } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
        this.toDate = date;
      } 
      else {
        this.rangeError = null;
        this.toDate = null;
        this.fromDate = date;
      }
      this._httpService.getAllBoughtProductsUserInput(this.fromDate.day, this.fromDate.month, this.toDate.day, this.toDate.month).subscribe(data => {
        this.variableTotalSales = 0;
        this.allProductsUserInput = 0;
        for (var i in data) {
          if (data[i]['price_id']) this.allProductsUserInput += 1;
          this._httpService.getOnePriceById(data[i]['price_id']).subscribe(price => {
            if (!price['errors']) this.variableTotalSales += price[0]['price_value'];
            if (this.rangeError) this.rangeError = null;
          })
        }
      })
    }
  }

  isHovered(date:NgbDate){
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date:NgbDate){
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date:NgbDate){
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

}
