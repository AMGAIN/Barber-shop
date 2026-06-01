import { HomePage } from "@/components/HomePage";
import type { Barber, Service } from "@/components/types";
import workon from "../public/workon.png"
import Braids from "../public/braids.png"
import Hairdie from "../public/Hair-die.png"
import PillorDecoration from "../public/Pillor-decoration.png"
import SpiderHair from "../public/Spider-hair.png"
import WorkSpace from "../public/WorkSpace.png"

export const BARBERS: Barber[] = [
  {
    id: 1,
    name: "Kriti Tamang",
    title: "Master Barber",
    rating: 4.9,
    reviews: 312,
    experience: "1 years",
    specialties: ["Fade", "Line-up", "Beard sculpt"],
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 1,
    name: "Kriti Tamang",
    title: "Master Barber",
    rating: 4.9,
    reviews: 312,
    experience: "1 years",
    specialties: ["Fade", "Line-up", "Beard sculpt"],
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Prabal Lamichhine",
    title: "Senior Barber",
    rating: 4.8,
    reviews: 241,
    experience: "4 years",
    specialties: ["Curly cuts", "Afro texture", "Design cuts"],
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Badal Rawat",
    title: "Stylist",
    rating: 4.7,
    reviews: 178,
    experience: "2 years",
    specialties: ["Color work", "Textured styles", "Kids cuts"],
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
  },
];

export const SERVICES: Service[] = [
  // MALE SERVICES
  // Hair Services
  { id: 1, name: "Hair Cut/Wash/Setting", price: "Rs. 500", category: "Hair Services", gender: "male" },
  { id: 2, name: "Hair Wash/Setting", price: "Rs. 250", category: "Hair Services", gender: "male" },
  { id: 3, name: "Boys Long Hair Cut", price: "Rs. 550", category: "Hair Services", gender: "male" },
  { id: 4, name: "Clean Shaving", price: "Rs. 200", category: "Hair Services", gender: "male" },
  { id: 5, name: "Beard Styling", price: "Rs. 150", category: "Hair Services", gender: "male" },
  { id: 6, name: "Kids Hair Cut (Under 11)", price: "Rs. 400", category: "Hair Services", gender: "male" },
  { id: 7, name: "Free Style Line Designs", price: "Rs. 50 - 100", category: "Hair Services", gender: "male" },
  { id: 8, name: "Monica Barber Hair Cut", price: "Rs. 650", category: "Hair Services", gender: "male" },

  // Colour - Male
  { id: 9, name: "Base Colour", price: "Rs. 1,500 - 2,000", category: "Colour", gender: "male" },
  { id: 10, name: "Fashion Colour", price: "Rs. 2,500 - 3,500", category: "Colour", gender: "male" },
  { id: 11, name: "High Light", price: "Rs. 1,800 - 2,700", category: "Colour", gender: "male" },
  { id: 12, name: "Black Colour Touchup", price: "Rs. 500 - 700", category: "Colour", gender: "male" },

  // Braids - Male
  { id: 13, name: "Simple Cornrows Braids", price: "Rs. 3,000 - 4,000", category: "Braids", gender: "male" },
  { id: 14, name: "Stylish Braids", price: "Rs. 3,800 - 5,000", category: "Braids", gender: "male" },
  { id: 15, name: "Box Braids Extension", price: "Rs. 4,000 - 6,000", category: "Braids", gender: "male" },

  // Cleansing - Male
  { id: 16, name: "Normal Face Wash", price: "Rs. 300", category: "Cleansing", gender: "male" },
  { id: 17, name: "Normal Cleansing", price: "Rs. 600", category: "Cleansing", gender: "male" },
  { id: 18, name: "Deep Cleansing", price: "Rs. 1,200", category: "Cleansing", gender: "male" },

  // Hair Treatment - Male
  { id: 19, name: "Oil Massage", price: "Rs. 800", category: "Hair Treatment", gender: "male" },
  { id: 20, name: "Hair Spa", price: "Rs. 500 - 800", category: "Hair Treatment", gender: "male" },
  { id: 21, name: "Keratin Treatment", price: "Rs. 2,500 - 3,500", category: "Hair Treatment", gender: "male" },
  { id: 22, name: "Hair Perm", price: "Rs. 4,000 - 5,000", category: "Hair Treatment", gender: "male" },

  // FEMALE SERVICES
  // Hair Services
  { id: 23, name: "Hair Cut/Wash/Setting", price: "Rs. 1,000", category: "Hair Services", gender: "female" },
  { id: 24, name: "Hair Wash Setting", price: "Rs. 600", category: "Hair Services", gender: "female" },
  { id: 25, name: "Hair Trimming", price: "Rs. 550", category: "Hair Services", gender: "female" },
  { id: 26, name: "Kids Hair Cut (Under 11)", price: "Rs. 600", category: "Hair Services", gender: "female" },

  // Colour - Female
  { id: 27, name: "Base Colour", price: "Rs. 3,500 - 4,000", category: "Colour", gender: "female" },
  { id: 28, name: "Fashion Colour", price: "Rs. 4,000 - 6,000", category: "Colour", gender: "female" },
  { id: 29, name: "High Light", price: "Rs. 3,500 - 6,000", category: "Colour", gender: "female" },
  { id: 30, name: "Touchup", price: "Rs. 1,000 - 1,500", category: "Colour", gender: "female" },

  // Braids - Female
  { id: 31, name: "Simple Cornrows Braids", price: "Rs. 4,500 - 6,000", category: "Braids", gender: "female" },
  { id: 32, name: "Stylish Braids", price: "Rs. 6,000 - 8,000", category: "Braids", gender: "female" },
  { id: 33, name: "Extension Rows", price: "Rs. 7,000 - 10,000", category: "Braids", gender: "female" },
  { id: 34, name: "Extension Box", price: "Rs. 8,000 - 12,000", category: "Braids", gender: "female" },

  // Hair Treatment - Female
  { id: 35, name: "Oil Massage", price: "Rs. 700 - 1,000", category: "Hair Treatment", gender: "female" },
  { id: 36, name: "Hair Spa", price: "Rs. 1,200 - 1,700", category: "Hair Treatment", gender: "female" },
  { id: 37, name: "Keratin Treatment", price: "Rs. 4,000 - 6,500", category: "Hair Treatment", gender: "female" },
  { id: 38, name: "Hair Perm", price: "Rs. 7,000 - 10,000", category: "Hair Treatment", gender: "female" },
];

export const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "1:00 PM",
  "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
];

export const BOOKED_SLOTS = ["10:00 AM", "11:00 AM", "2:00 PM", "3:30 PM"];

export const TESTIMONIALS = [
  {
    name: "Alex Reyes",
    rating: 5,
    text: "Best fade I've ever had. Marcus knows exactly what he's doing — sharp lines, perfect blend. Won't go anywhere else.",
    date: "2 days ago",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Tyler Brooks",
    rating: 5,
    text: "Booked online in under a minute. Jordan did an incredible job on my textured cut. The shop itself is immaculate.",
    date: "1 week ago",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Kwame Osei",
    rating: 5,
    text: "VIP Package is worth every penny. Full grooming, hot towel shave — felt like a whole new person walking out.",
    date: "2 weeks ago",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format",
  },
];

export const GALLERY_IMGS = [
  workon,
  Braids,
  Hairdie,
  PillorDecoration,
  SpiderHair,
  WorkSpace,
];

export const ADMIN_APPOINTMENTS = [
  { id: "BB-2247", client: "Alex Reyes", barber: "Marcus Chen", service: "Classic Fade", time: "9:30 AM", status: "confirmed" },
  { id: "BB-2248", client: "Tyler Brooks", barber: "Jordan Ellis", service: "Full Haircut", time: "10:00 AM", status: "pending" },
  { id: "BB-2249", client: "Kwame Osei", barber: "Marcus Chen", service: "VIP Package", time: "11:30 AM", status: "confirmed" },
  { id: "BB-2250", client: "Sam Park", barber: "Dani Morales", service: "Beard Trim", time: "2:00 PM", status: "cancelled" },
  { id: "BB-2251", client: "Mike Torres", barber: "Jordan Ellis", service: "Full Grooming", time: "3:30 PM", status: "completed" },
  { id: "BB-2252", client: "Chris Okafor", barber: "Marcus Chen", service: "Beard Sculpt", time: "4:30 PM", status: "pending" },
];

export const USER_BOOKINGS = [
  { id: "BB-2198", service: "Classic Fade", barber: "Marcus Chen", date: "Jan 10, 2025", time: "10:00 AM", status: "completed", price: 25 },
  { id: "BB-2215", service: "Full Grooming", barber: "Jordan Ellis", date: "Dec 28, 2024", time: "2:30 PM", status: "completed", price: 60 },
  { id: "BB-2247", service: "VIP Package", barber: "Marcus Chen", date: "Jan 17, 2025", time: "11:30 AM", status: "confirmed", price: 90 },
  { id: "BB-2231", service: "Beard Sculpt", barber: "Dani Morales", date: "Jan 5, 2025", time: "3:00 PM", status: "cancelled", price: 35 },
];

export default function Page() {
  return (
    <HomePage
      barbers={BARBERS}
      services={SERVICES}
      testimonials={TESTIMONIALS}
      galleryImgs={GALLERY_IMGS}
    />
  );
}
