import sureshImg from '../assets/suresh.jpg';
import rupeshImg from '../assets/rupesh.jpg';
import travellerImg from '../assets/traveller.jpg';
import xyloImg from '../assets/xylo.jpg';
import innovaImg from '../assets/Innova.jpg';

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  features: string[];
  image: string;
  description: string;
}

export interface Owner {
  name: string;
  role: string;
  phone: string;
  image: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Innova Crysta",
    type: "Premium SUV",
    capacity: "6-7 Seater",
    features: ["AC", "Ample Luggage Space", "Premium Leather Seats", "Airbags"],
    image: innovaImg,
    description: "Ideal for comfortable family trips, corporate travels, and premium wedding drop-offs."
  },
  {
    id: "2",
    name: "Mahindra Xylo",
    type: "Comfort SUV",
    capacity: "7-8 Seater",
    features: ["AC & Non-AC options", "Spacious Cabin", "Reliable Performance"],
    image: xyloImg,
    description: "Great value vehicle optimized for outstation family picnics, group travel, and long distances."
  },
  {
    id: "3",
    name: "Force Traveller",
    type: "Luxury Mini Bus",
    capacity: "13-17 Seater",
    features: ["High Roof Cabin", "Pushback Seats", "Dual AC", "Music System"],
    image: travellerImg,
    description: "Perfect for larger family groups, marriage events, picnics, and pilgrimage tours."
  }
];

export const OWNER_DATA: Owner[] = [
  {
    name: "Suresh",
    role: "Co-Founder & Operations Head",
    phone: "9322478104",
    image: sureshImg
  },
  {
    name: "Rupesh",
    role: "Co-Founder & Customer Relations",
    phone: "9930242123",
    image: rupeshImg
  }
];

export const BUSINESS_INFO = {
  address: "Room No. 9, Ground Floor, Shiv Shakti Apt, Jai Malhar Nagar, Chkhlebaug, Kalyan (W).",
  services: [
    "Wedding events",
    "Family Picnics",
    "Election Campaigns",
    "Tailored Package Tours",
    "Local & Outstation Trips"
  ],
  whatsappNumbers: ["9930242123", "9664000715"]
};