export const ORGANIZATION = {
  name: "Winners Widows & Widowers International",
  shortName: "WWWI",
  tagline: "Empowering Lives, Restoring Hope",
  founded: 2014,
  founder: "Mary Kipchilis",
  email: "info@winnerswidows.org", // PLACEHOLDER
  phone: "+1 (555) 123-4567", // PLACEHOLDER
  website: "https://winnerswidows.org",
  socialMedia: {
    facebook: "https://facebook.com/winnerswidows", // PLACEHOLDER
    instagram: "https://instagram.com/winnerswidows", // PLACEHOLDER
    twitter: "https://twitter.com/winnerswidows", // PLACEHOLDER
  },
} as const;

export const ADDRESSES = {
  us: {
    label: "United States Office",
    street: "916 N Jupiter Rd",
    city: "Garland",
    state: "TX",
    zip: "75042-5440",
    country: "USA",
    full: "916 N Jupiter Rd, Garland, TX 75042-5440, USA",
    phone: "+1 (555) 123-4567", // PLACEHOLDER
    email: "us@winnerswidows.org", // PLACEHOLDER
  },
  kenya: {
    label: "Kenya Office",
    building: "Daima Towers",
    city: "Eldoret City",
    country: "Kenya",
    full: "Daima Towers, Eldoret City, Kenya",
    phone: "+254 700 000 000", // PLACEHOLDER
    email: "kenya@winnerswidows.org", // PLACEHOLDER
  },
} as const;

export const CAMPS = [
  {
    id: "kasoiyo",
    name: "Kasoiyo Camp",
    location: "Kabarnet, Kenya",
    members: 22,
    description: "Pioneer community in our livestock program with dairy cows and Dorper sheep.",
  },
  {
    id: "talai",
    name: "Talai Camp",
    location: "Kaptumo Ward, Kenya",
    members: 45,
    description: "Our largest community with full suite of programs operational.",
  },
  {
    id: "cheburur",
    name: "Cheburur Camp",
    location: "Chembulet, Kenya",
    members: 25,
    description: "Growing community with strong skills training initiatives.",
  },
] as const;

export const BOARD_MEMBERS = [
  {
    id: "mary-kipchilis",
    name: "Mary Kipchilis",
    role: "Founder & President",
    bio: "Founder of Winners Widows & Widowers International, Mary has dedicated her life to empowering widows and widowers in rural Kenya since 2014.", // PLACEHOLDER - expand
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "pastor-luka-kipchilis",
    name: "Pastor Luka Kipchilis",
    role: "Board Member",
    bio: "A dedicated pastor and community leader supporting the organization's mission.", // PLACEHOLDER - expand
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "hillary-kosgei",
    name: "Hillary Kosgei",
    role: "Board Member",
    bio: "Committed to advancing sustainable development initiatives in Kenya.", // PLACEHOLDER - expand
    image: "/images/team/placeholder.jpg",
  },
  {
    id: "fred-kibet",
    name: "Fred Kibet",
    role: "Board Member",
    bio: "Bringing expertise in technology and operations to support the organization's growth.", // PLACEHOLDER - expand
    image: "/images/team/placeholder.jpg",
  },
] as const;

export const PROGRAMS = [
  {
    id: "livestock",
    title: "Livestock Empowerment",
    icon: "Beef",
    description:
      "Providing dairy cows and Dorper sheep to community members with shared proceeds model.",
    features: [
      "Members receive livestock as a community resource",
      "Milk and sale proceeds shared equally",
      "Animals reproduce, growing community assets",
      "Animal husbandry and business training",
    ],
  },
  {
    id: "education",
    title: "Education Support",
    icon: "GraduationCap",
    description: "Breaking the cycle of poverty through education for children and adults.",
    features: [
      "School fees for children of widows and widowers",
      "School supplies and uniforms",
      "Scholarship opportunities",
      "Adult literacy programs",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Assistance",
    icon: "HeartPulse",
    description: "Ensuring access to healthcare for members and their families.",
    features: [
      "Medical bill assistance",
      "Health education programs",
      "Healthcare provider partnerships",
      "Emergency medical fund",
    ],
  },
  {
    id: "income-training",
    title: "Income & Skills Training",
    icon: "Briefcase",
    description: "Teaching skills that create lasting income opportunities.",
    features: [
      "Vocational training programs",
      "Small business development",
      "Financial literacy education",
      "Agricultural best practices",
    ],
  },
  {
    id: "seasonal-support",
    title: "Seasonal & Emergency Support",
    icon: "Gift",
    description: "Being there when it matters most.",
    features: [
      "Christmas food packages",
      "Emergency assistance during crises",
      "Community celebration events",
      "Bereavement support",
    ],
  },
] as const;

export const DONATION_METHODS = {
  us: [
    {
      id: "cashapp",
      name: "CashApp",
      icon: "DollarSign",
      details: "@WinnersWidows", // PLACEHOLDER
      instructions: "Scan QR code or search username",
    },
    {
      id: "zelle",
      name: "Zelle",
      icon: "Send",
      details: "donate@winnerswidows.org", // PLACEHOLDER
      instructions: "Send directly from your bank app",
    },
    {
      id: "check",
      name: "Check by Mail",
      icon: "Mail",
      details: "Winners Widows & Widowers International",
      instructions: "916 N Jupiter Rd, Garland, TX 75042-5440",
    },
  ],
  kenya: [
    {
      id: "mpesa",
      name: "M-Pesa",
      icon: "Smartphone",
      details: "Paybill: 123456", // PLACEHOLDER
      instructions: "Account: WWWI", // PLACEHOLDER
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "Building",
      details: "Account: 1234567890", // PLACEHOLDER
      instructions: "Bank Name, Branch", // PLACEHOLDER
    },
  ],
} as const;

export const STATS = [
  { value: "92+", label: "Active Members" },
  { value: "3", label: "Community Camps" },
  { value: "10+", label: "Years of Service" },
  { value: "5", label: "Empowerment Programs" },
] as const;

export const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const DESIGNATIONS = [
  "General Fund (Where Most Needed)",
  "Kasoiyo Camp",
  "Talai Camp",
  "Cheburur Camp",
  "Livestock Program",
  "Education Support",
  "Healthcare",
  "Christmas Fund",
] as const;

export const PAYMENT_METHODS = [
  "CashApp",
  "Zelle",
  "Check",
  "M-Pesa",
  "Bank Transfer",
  "Other",
] as const;

export const MEMBER_ROLES = [
  "Member",
  "Coordinator",
  "Chairperson",
  "Secretary",
  "Treasurer",
] as const;

export const MEMBER_STATUSES = ["Active", "Inactive", "Deceased"] as const;

export const ALLOCATION_PURPOSES = [
  "Livestock Purchase",
  "Livestock Feed/Care",
  "Veterinary Services",
  "Education - School Fees",
  "Education - Supplies",
  "Healthcare",
  "Food Distribution",
  "Emergency Support",
  "Skills Training",
  "Other",
] as const;
