import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  image: string;
  category: string;
  duration: string;
  rating: number;
  reviews: number;
}

interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ServicesComponent implements OnInit {
  categories: ServiceCategory[] = [
    {
      id: 1,
      name: 'Maintenance',
      icon: 'fas fa-wrench',
      description: 'Regular maintenance to keep your vehicle in top condition'
    },
    {
      id: 2,
      name: 'Detailing',
      icon: 'fas fa-spray-can',
      description: 'Professional cleaning and detailing services'
    },
    {
      id: 3,
      name: 'Performance',
      icon: 'fas fa-tachometer-alt',
      description: 'Enhance your vehicle\'s performance'
    },
    {
      id: 4,
      name: 'Repair',
      icon: 'fas fa-tools',
      description: 'Expert repair and restoration services'
    }
  ];

  services: Service[] = [
    {
      id: 1,
      title: 'Car Maintenance',
      description: 'Comprehensive maintenance services to keep your vehicle running smoothly.',
      icon: 'fas fa-tools',
      features: [
        'Oil Change & Filter Replacement',
        'Brake Inspection & Service',
        'Tire Rotation & Alignment',
        'Fluid Level Checks',
        'Battery Testing',
        'Engine Diagnostics',
        'Transmission Service',
        'Cooling System Maintenance'
      ],
      price: 'Starting from $99',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Maintenance',
      duration: '2-4 hours',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      title: 'Detailing Services',
      description: 'Professional detailing to make your car look brand new.',
      icon: 'fas fa-spray-can',
      features: [
        'Exterior Wash & Wax',
        'Interior Deep Cleaning',
        'Paint Correction',
        'Leather Treatment',
        'Odor Elimination',
        'Headlight Restoration',
        'Engine Bay Cleaning',
        'Ceramic Coating'
      ],
      price: 'Starting from $149',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Detailing',
      duration: '4-6 hours',
      rating: 4.9,
      reviews: 203
    },
    {
      id: 3,
      title: 'Performance Upgrades',
      description: 'Enhance your vehicle\'s performance with our expert upgrades.',
      icon: 'fas fa-tachometer-alt',
      features: [
        'Engine Tuning',
        'Exhaust System Upgrades',
        'Suspension Modifications',
        'Performance Chip Installation',
        'Custom ECU Mapping',
        'Turbo/Supercharger Installation',
        'Brake System Upgrades',
        'Aerodynamic Enhancements'
      ],
      price: 'Custom Quote',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Performance',
      duration: 'Varies',
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      title: 'Body Repair',
      description: 'Expert body repair services to restore your vehicle\'s appearance.',
      icon: 'fas fa-car-crash',
      features: [
        'Dent Removal',
        'Paint Matching',
        'Panel Replacement',
        'Frame Straightening',
        'Rust Prevention',
        'Collision Repair',
        'Glass Replacement',
        'Paintless Dent Repair'
      ],
      price: 'Free Estimate',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Repair',
      duration: 'Varies',
      rating: 4.6,
      reviews: 112
    },
    {
      id: 5,
      title: 'Electrical Services',
      description: 'Comprehensive electrical system diagnostics and repairs.',
      icon: 'fas fa-bolt',
      features: [
        'Battery Replacement',
        'Alternator Repair',
        'Starter Motor Service',
        'Wiring Diagnostics',
        'Lighting System Repair',
        'ECU Diagnostics',
        'Sensor Replacement',
        'Electrical System Upgrades'
      ],
      price: 'Starting from $79',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Maintenance',
      duration: '1-3 hours',
      rating: 4.5,
      reviews: 78
    },
    {
      id: 6,
      title: 'Interior Restoration',
      description: 'Restore your vehicle\'s interior to its original glory.',
      icon: 'fas fa-couch',
      features: [
        'Seat Repair & Reupholstery',
        'Dashboard Restoration',
        'Carpet Cleaning & Replacement',
        'Headliner Repair',
        'Trim Restoration',
        'Air Conditioning Service',
        'Sound System Installation',
        'Custom Interior Design'
      ],
      price: 'Starting from $199',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Detailing',
      duration: '1-2 days',
      rating: 4.8,
      reviews: 94
    }
  ];

  selectedService: Service | null = null;
  selectedCategory: string = 'all';
  searchQuery: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectService(service: Service): void {
    this.selectedService = service;
  }

  closeDetails(): void {
    this.selectedService = null;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredServices(): Service[] {
    return this.services.filter(service => {
      const matchesCategory = this.selectedCategory === 'all' || service.category === this.selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index < Math.floor(rating) ? 1 : 0);
  }
} 