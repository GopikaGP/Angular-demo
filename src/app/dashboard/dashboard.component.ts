import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
      dbemail:string=""
      dbpassword:string=""
  constructor(private ds:DataService){
    this.dbemail=ds.dsemail
    this.dbpassword=ds.dspswd
  }
 
}
