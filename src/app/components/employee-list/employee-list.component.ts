import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Employee } from 'src/app/model/employee';
import { EmployeesService } from 'src/app/service/employees.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  
  employees : Employee[] = [];


  Employee:any = [];

  constructor(private apiService: ApiService,
    private employeesService: EmployeesService ) { 

    this.readEmployee();
  }
  
  ngOnInit() {}
  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }
  removeEmployee(employee: { _id: any; }, index: any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }
}