export interface Worker {
  id: number;
  name: string;
  role: string;
  experience: number;
  specializations: string[];
  certifications: string[];
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
}