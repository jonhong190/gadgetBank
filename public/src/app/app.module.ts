import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ProductSelectComponent } from './product-select/product-select.component';
import { FileDropModule } from 'ngx-file-drop';
import { FileSelectDirective } from 'ng2-file-upload';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    SettingsComponent,
    ProductEditComponent,
    ProductAddComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    FaqComponent,
    ProductSelectComponent,
    FileSelectDirective,
    CustomerPortalComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FileDropModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
