import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginemail:string=''
  loginpswd:string=''

  constructor(private ds:DataService, private router:Router){}

  login(){
        this.ds.dsemail=this.loginemail
        this.ds.dspswd=this.loginpswd 
        this.router.navigateByUrl('/dashboard')
  }
}
