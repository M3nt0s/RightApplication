import { Component, OnInit, Output, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})


export class EmployeeListComponent implements OnInit {
  title: string;

  @Output() EmployeeWasSelected = new EventEmitter<Employee>();
  @Input() employees: Employee[];

  SelectedEmployee: Employee;

  constructor() {
    this.title = 'Employee List';
  }

  ngOnInit(): void {
  }

  selectedItem(emp: Employee) {
    this.EmployeeWasSelected.emit(emp);
  }
}
