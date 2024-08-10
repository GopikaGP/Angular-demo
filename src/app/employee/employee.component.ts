import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  empName:string="Maxwell"

  empImg:string="https://www.drivelah.sg/static/media/avatar4.a80a5d55.jpeg"
  getDes(event:any){
     console.log(event.target.value)
  }
}
