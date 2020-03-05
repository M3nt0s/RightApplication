import { Component, OnInit } from "@angular/core";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-storage-clear",
  templateUrl: "./storage-clear.component.html",
  styleUrls: ["./storage-clear.component.scss"]
})
export class StorageClearComponent implements OnInit {
  faPowerOff = faPowerOff;
  constructor() {}

  ngOnInit(): void {}

  storageFree() {
    localStorage.clear();
    location.reload();
  }
}
