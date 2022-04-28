import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() page = new EventEmitter<string>();

  onPageChange(page: string) {
    this.page.emit(page);
  }
}
