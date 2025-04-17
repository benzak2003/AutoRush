import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  navItems: NavItem[] = [
    { path: '/home', label: 'Home', icon: 'fas fa-home' },
    { path: '/inventory', label: 'Inventory', icon: 'fas fa-car' },
    { path: '/services', label: 'Services', icon: 'fas fa-cogs' },
    { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.closeMobileMenu();
  }
}
