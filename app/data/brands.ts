export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  description: string;
  url: string;
  isMobile: boolean;
  votes: number;
  badgeText?: string;
  badgeColor?: string;
}

export const brands: Brand[] = [
  
  {
    id: "spinboss",
    name: "Spinboss",
    logo: "/brands/spinboss.webp",
    rating: 9.5,
    bonus: "400% up to 12750 GBP + 400 FS",
    description: "Top Slots & Live Casino with a Huge Welcome Bonus",
    url: "https://spinboss.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=spinboss",
    badgeText: "Withdrawals within 1 hour",
    badgeColor: "bg-green-600",
    isMobile: true,
    votes: 8997,
  },
  {
    id: "westace",
    name: "Westace",
    logo: "/brands/westace.webp",
    rating: 9.7,
    bonus: "300% UP TO €2000 + 150 FS",
    description: "Massive Welcome Package with Hundreds of Free Spins",
    url: "https://westace.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=westace",
    badgeText: "Register in seconds",
    badgeColor: "bg-blue-600",
    isMobile: true,
    votes: 7834,
  },
  
  {
    id: "odinfortune",
    name: "OdinFortune",
    logo: "/brands/odinfortune.png",
    rating: 9.8,
    bonus: "Up to €4,000 + 700 FS",
    description: "Epic Slots & Live Casino with a Legendary Bonus Package",
    url: "https://odinfortune.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=odinfortune",
    badgeText: "Crypto Friendly",
    badgeColor: "bg-purple-600",
    isMobile: true,
    votes: 5872,
  },
  // {
  //   id: "sankra",
  //   name: "Sankra",
  //   logo: "/brands/sankra.svg",
  //   rating: 9.6,
  //   bonus: "100% UP TO £600 + 200 FREE SPINS",
  //   description: "Generous Slots & Casino Rewards with 200 Free Spins",
  //   url: "https://sankra.muforaset.live?sub_id_1=t4p6a0wbej43uo&utm_source=sankra",
  //   isMobile: true,
  //   votes: 3456,
  // },
  
  
  
  {
    id: "bluefox-casino",
    name: "BlueFox Casino",
    logo: "/BlueFox_Casino.max-600x340.webp",
    rating: 10.0,
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    description: "Premium Gaming Experience with Massive Jackpots & 24/7 Support",
    url: "https://track-otn.com/trk.php?t=1643&c=2712",
    isMobile: false,
    votes: 4821,
    badgeText: "Most Trusted • High Roller Choice",
    badgeColor: "bg-red-600",
  },
  {
    id: "mogobet",
    name: "MogoBet",
    logo: "/mogobet.webp",
    rating: 9.9,
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    description: "Fast Payouts, Exclusive Slots and Elite Sportsbook",
    url: "https://track-otn.com/trk.php?t=1641&c=2713",
    isMobile: false,
    votes: 3654,
    badgeText: "Expert Choice • Verified 2026",
    badgeColor: "bg-blue-600",
  },
];
