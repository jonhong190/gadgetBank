import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser:any;
  logUser:any;
  loginErrors:any;
  regErrors:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newUser = {first_name:"", last_name:"", email:"", password:"", username:"", admin:false};
    this.logUser = {email:"", password:""}

  }

  loginUser(user){
    user = this.logUser;
    this._httpService.postLoginCustomer(user).subscribe((data)=>{
      console.log(data)
      if(data['errors']) {
        this.loginErrors = data['errors'];
        return;
      }
      if(data[0].admin == true){
        this._router.navigate(['/dashboard']);
      }
      else{
        this._router.navigate(['/portal'])
      }
    })
  }

  registerUser(){
    
    this._httpService.postNewCustomer(this.newUser).subscribe(data=>{
      console.log(data);
      if(data['errors']){
        this.regErrors = data['errors'];
        return;
      }
      this._router.navigate(['/portal']);
    })
    
  }

}
