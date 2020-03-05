import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";

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
  }

  ngOnInit(): void {
    this.storageFunction();
  }

  storageSave() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }

  storageFunction() {
    var data = JSON.parse(localStorage.getItem("employees"));

    if (!(data === null)) {
      for (var i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          this.autoincrement = +data[data.length - 1].id;
          this.autoincrement++;
        }
        this.employees.push(data[i]);
      }
    }
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.storageSave();
    this.autoincrement++;
  }

  editEmployee(employee: Employee) {
    const index = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    this.employees[index] = employee;
    this.storageSave();
  }

  deleteEmployee(employee: Employee) {
    const indexx = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    if (indexx > -1) {
      this.employees.splice(indexx, 1);
    }
    this.storageSave();
  }
}
