import { Component, OnInit, Output, Input } from "@angular/core";
import { Employee } from "./employee.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  SelectedEmployee: Employee;
  autoincrement: number;

  constructor() {
    this.autoincrement = 1;
    this.employees = [];
    this.addEmployee(new Employee(this.autoincrement, 'Dominik', 'Latas', 21));
    this.addEmployee(
      new Employee(this.autoincrement, 'Norbert', 'Bankowski', 26)
    );
    this.addEmployee(new Employee(this.autoincrement, 'Pawel', 'Zacharz', 17));
  }

  ngOnInit(): void { }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.autoincrement++;
  }

  editEmployee(employee: Employee) {
    const index = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    console.log(employee.id);
    this.employees[index] = employee;
  }

  deleteEmployee(employee: Employee) {

    const indexx = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    if (indexx > -1) {
      this.employees.splice(indexx, 1);
    }
  }
}
