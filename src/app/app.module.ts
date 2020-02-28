import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DevicesComponent } from './devices/devices.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ConnectionsComponent } from './connections/connections.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceItemComponent } from './devices/device-list/device-item/device-item.component';
import { EmployeeManagerComponent } from './employees/employee-manager/employee-manager.component';
import { EmployeeToolbarComponent } from './employees/employee-toolbar/employee-toolbar.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DevicesComponent,
    LeftbarComponent,
    ConnectionsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeItemComponent,
    DeviceDetailComponent,
    DeviceEditComponent,
    DeviceListComponent,
    DeviceItemComponent,
    EmployeeManagerComponent,
    EmployeeToolbarComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
