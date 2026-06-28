export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatarColor: string;
  companyInitial: string;
  companyColor: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marco Cornacchia",
    company: "Furniture Odyssey",
    quote:
      "They built us a catalog website and a POS dashboard that completely changed how we handle sales. Quotations, payments, deliveries — everything is tracked now. No more lost receipts or forgotten orders.",
    avatarColor: "#E8B4B8",
    companyInitial: "FO",
    companyColor: "#D4A574",
  },
  {
    name: "Angela Santos",
    company: "Salon Keeper",
    quote:
      "Before this app, we were booking appointments on paper and counting inventory by hand. Now my staff can manage everything from their phones. The calendar system alone saved us from double bookings.",
    avatarColor: "#B8D4E8",
    companyInitial: "SK",
    companyColor: "#9B7EC8",
  },
  {
    name: "Rico Dela Cruz",
    company: "Hardware Store",
    quote:
      "Our customers can now browse products and place orders online. The admin dashboard lets us track every order from pending to delivered. The automated SMS updates reduced our customer calls by half.",
    avatarColor: "#C8E8B8",
    companyInitial: "HS",
    companyColor: "#E89B6B",
  },
];
