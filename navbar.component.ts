import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  menuIndexIndexEmitter: EventEmitter<number> = new EventEmitter<number>();

  selectedTabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  emitMenuIndex(menuIndex: number = 0){
    this.selectedTabIndex = menuIndex;
    this.menuIndexIndexEmitter.emit(menuIndex);
  }

}
