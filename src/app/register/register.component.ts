import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:string=""
  email:string=""
  password:string=""
  constructor(private router:Router){
      
  }

  register(){
    console.log(this.username)
    console.log(this.email);
    console.log(this.password);

   this.router.navigateByUrl('/login')
    
    
  }
}
