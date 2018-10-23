import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser:any;
  logUser:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newUser = {first_name: "", last_name: "", email:"", password:"", username:"", admin:false},
    this.logUser = {email:"", password:""}

  }
  loginUser(user){
    user = this.logUser;
    this._httpService.getLoginCustomer(user.email).subscribe((data)=>{
      if(data[0].length == 0){
        console.log("no user found");
        this._router.navigate(['/create-account']);
      }
      if(data[0].password != user.password) {
        console.log("wrong password");
        this._router.navigate(['/create-account']);
      }
      if(data[0].admin == true){
        this._router.navigate(['/dashboard']);
      }
      else{
        this._router.navigate(['/portal'])
      }
    })
  }

  registerUser(user){
    user = this.newUser;
    
  }

}
