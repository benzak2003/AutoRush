export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  role: 'user' | 'admin';
} 