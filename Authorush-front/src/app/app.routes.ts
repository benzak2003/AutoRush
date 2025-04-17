import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { MotorcycleListComponent } from './components/motorcycle-list/motorcycle-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { MotorcycleDetailComponent } from './components/motorcycle-detail/motorcycle-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'motorcycles', component: MotorcycleListComponent },
  { path: 'motorcycles/:id', component: MotorcycleDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: NotFoundComponent }
];
