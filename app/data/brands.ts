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
    id: "bluefox-casino",
    name: "BlueFox Casino",
    logo: "/BlueFox_Casino.max-600x340.webp",
    rating: 10.0,
    bonus: "WELCOME PACKAGE UP TO £1000 + 100 FREE SPINS",
    description: "Premium Gaming Experience with Massive Jackpots & 24/7 Support",
    url: "https://track-otn.com/trk.php?t=1643&c=2712&clickid=",
    isMobile: true,
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
    url: "https://track-otn.com/trk.php?t=1641&c=2713&clickid=",
    isMobile: true,
    votes: 3654,
    badgeText: "Expert Choice • Verified 2026",
    badgeColor: "bg-blue-600",
  },
];
