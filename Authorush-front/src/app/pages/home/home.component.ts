import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car3dComponent } from '../../components/3d-car/3d-car.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, Car3dComponent]
})
export class HomeComponent {
  featuredVehicles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Porsche 911 GT3',
      price: '$165,000',
      type: 'car'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Lamborghini Huracan',
      price: '$250,000',
      type: 'car'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Ferrari 488 GTB',
      price: '$280,000',
      type: 'car'
    }
  ];

  testimonials = [
    {
      id: 1,
      text: "The best car buying experience I've ever had. The team was professional and made the process seamless.",
      author: "John Smith",
      role: "BMW M4 Owner",
      image: "assets/images/customer1.jpg"
    },
    {
      id: 2,
      text: "Incredible selection of vehicles and outstanding customer service. Found my dream bike here!",
      author: "Sarah Johnson",
      role: "Ducati Owner",
      image: "assets/images/customer2.jpg"
    },
    {
      id: 3,
      text: "The attention to detail and personalized service made all the difference. Highly recommend!",
      author: "Michael Brown",
      role: "Mercedes Owner",
      image: "assets/images/customer3.jpg"
    }
  ];
}
