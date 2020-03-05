import { Component, OnInit } from "@angular/core";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

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
    const retVal = confirm("Delete all local data ?");
    if (retVal === true) {
      localStorage.clear();
      location.reload();
    } else {
      return false;
    }
  }
}
