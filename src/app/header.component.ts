import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './templates/header.component.html',
  styleUrls: ['./styles/header.component.css']
})
export class HeaderComponent {
  @Output() menuSelected = new EventEmitter <string>();
  
  onSelect(menuItem: string) {
    this.menuSelected.emit(menuItem);
  }
}
