import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto-navigate to home after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

  skipIntro() {
    this.router.navigate(['/home']);
  }
} 