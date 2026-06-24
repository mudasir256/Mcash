export type User = {
  name: string;
  greeting: string;
  avatar: string;
  balance: string;
};

export const currentUser: User = {
  name: "Alex Sterling",
  greeting: "WELCOME",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces",
  balance: "1,200.00",
};

export type PromoOffer = {
  id: string;
  title: string;
  category: string;
  tasks: number;
  perInstall: string;
  image: string;
};

export const promoOffers: PromoOffer[] = [
  {
    id: "promo-1",
    title: "Amazing Game Promo",
    category: "Install & Play Game",
    tasks: 5,
    perInstall: "1,200.00",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
  },
  {
    id: "promo-2",
    title: "Amazing Game Promo",
    category: "Install & Play Game",
    tasks: 5,
    perInstall: "1,200.00",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
  },
  {
    id: "promo-3",
    title: "Amazing Game Promo",
    category: "Install & Play Game",
    tasks: 5,
    perInstall: "1,200.00",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
  },
  {
    id: "promo-4",
    title: "Amazing Game Promo",
    category: "Install & Play Game",
    tasks: 5,
    perInstall: "1,200.00",
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
  },
];

export type FinanceOffer = {
  id: string;
  name: string;
  category: string;
  reward: string;
  short: string;
  gradient: string;
};

export const financeOffers: FinanceOffer[] = [
  {
    id: "fin-1",
    name: "IDFC First Bank",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "IDFC",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: "fin-2",
    name: "Kotak Bank",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "Kotak",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "fin-3",
    name: "Upstox",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "Upstox",
    gradient: "from-purple-800 to-indigo-900",
  },
  {
    id: "fin-4",
    name: "Super Money",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "SM",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "fin-5",
    name: "IDFC First Bank",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "IDFC",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: "fin-6",
    name: "Super Money",
    category: "Install & Play Game",
    reward: "1,200.00",
    short: "SM",
    gradient: "from-blue-500 to-indigo-600",
  },
];

export type CompactOffer = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  color: string;
};

export const compactOffers: CompactOffer[] = [
  {
    id: "c-1",
    name: "MyChips",
    description: "Play nation games by Mychips",
    badge: "+20% Bonus",
    color: "bg-amber-100 text-amber-500",
  },
  {
    id: "c-2",
    name: "AdGate Media",
    description: "Play nation games by Mychips",
    color: "bg-sky-100 text-sky-500",
  },
  {
    id: "c-3",
    name: "AdGate Media",
    description: "Play nation games by Mychips",
    color: "bg-violet-100 text-violet-500",
  },
  {
    id: "c-4",
    name: "MyChips",
    description: "Play nation games by Mychips",
    badge: "+20% Bonus",
    color: "bg-amber-100 text-amber-500",
  },
  {
    id: "c-5",
    name: "AdGate Media",
    description: "Play nation games by Mychips",
    color: "bg-sky-100 text-sky-500",
  },
  {
    id: "c-6",
    name: "AdGate Media",
    description: "Play nation games by Mychips",
    color: "bg-violet-100 text-violet-500",
  },
];

export type LeaderboardEntry = {
  rank: number;
  name: string;
  tasks: number;
  amount: string;
  avatar: string;
};

const lbAvatars = [
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces",
];

export const leaderboard: LeaderboardEntry[] = Array.from(
  { length: 8 },
  (_, i) => ({
    rank: i + 1,
    name: "Neeraj Pant",
    tasks: 230,
    amount: "1,200.00",
    avatar: lbAvatars[i % lbAvatars.length],
  }),
);

export type Transaction = {
  id: string;
  type: string;
  status: "COMPLETED" | "PENDING";
  amount: string;
  positive: boolean;
  source: string;
  date: string;
  reference: string;
};

export const transactions: Transaction[] = [
  {
    id: "t-1",
    type: "Campaign Payout",
    status: "COMPLETED",
    amount: "+$420.00",
    positive: true,
    source: "L'Oreal Q4 Campaign",
    date: "Feb 24, 2024",
    reference: "#TXN-83921",
  },
  {
    id: "t-2",
    type: "Referral Bonus",
    status: "PENDING",
    amount: "+$100.00",
    positive: true,
    source: "Alex Sterling Invite",
    date: "Feb 22, 2024",
    reference: "#TXN-83920",
  },
  {
    id: "t-3",
    type: "Withdrawal",
    status: "COMPLETED",
    amount: "-$500.00",
    positive: false,
    source: "Bank Transfer (PNB)",
    date: "Feb 18, 2024",
    reference: "#TXN-83919",
  },
];

export const payoutSummary = {
  coinValue: "$1,020.00",
  totalRedeem: "$0.00",
  pending: "$300.00",
  coinBalance: "1,200.00",
};
