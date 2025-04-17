import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Alexander Wright',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Visionary leader with 15+ years in luxury automotive industry'
    },
    {
      name: 'Sarah Chen',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      description: 'Award-winning automotive designer with a passion for innovation'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Expert in automotive engineering and performance optimization'
    }
  ];

  achievements = [
    {
      number: '10K+',
      title: 'Happy Clients',
      description: 'Satisfied customers who found their dream vehicles'
    },
    {
      number: '1000+',
      title: 'Luxury Cars',
      description: 'Premium vehicles in our exclusive collection'
    },
    {
      number: '15+',
      title: 'Years Experience',
      description: 'Years of excellence in luxury automotive industry'
    },
    {
      number: '24/7',
      title: 'Support',
      description: 'Round-the-clock premium customer service'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our service'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships through transparency and integrity'
    },
    {
      icon: '⚡',
      title: 'Innovation',
      description: 'Constantly evolving to provide cutting-edge automotive solutions'
    },
    {
      icon: '♥️',
      title: 'Passion',
      description: 'Driven by our love for exceptional automobiles'
    }
  ];
}
