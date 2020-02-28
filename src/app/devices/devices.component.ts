import { Component, OnInit } from '@angular/core';
import { Device } from './device.model';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  title: string;
  show: boolean;

  Devices:Device[] = [
    new Device(1, 'Asus', 'Black','Good'),
    new Device(2, 'HP', 'Silver','Average'),
    new Device(3, 'Acer', 'Silver-Red','Weak'),
    new Device(4, 'Lenovo', 'Black','Good')
  ];


  constructor() { 
    this.title="Devices list.";
    this.show = false;
  }

  ngOnInit(): void {
  }

  addButton(){
    this.show = true;
  }
}
