export interface Barber {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  experience: string;
  specialties: string[];
  img: string;
}

export interface Service {
  id: number;
  name: string;
  price: string;
  category: string;
  gender: "male" | "female";
}

export interface BookingState {
  barber: Barber | null;
  service: Service | null;
  date: string;
  time: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  img: string;
}

export interface AdminAppointment {
  id: string;
  client: string;
  barber: string;
  service: string;
  time: string;
  status: string;
}

export interface UserBooking {
  id: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  status: string;
  price: number;
}
