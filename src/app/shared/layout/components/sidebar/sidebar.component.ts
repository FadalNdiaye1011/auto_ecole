import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isExpanded = true;
  mobileMenuOpen = false;

  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    // Réduire la sidebar automatiquement sur les écrans plus petits
    if (window.innerWidth < 1024) {
      this.isExpanded = false;
    }
  }

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
    this.sidebarToggled.emit(this.isExpanded);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}


