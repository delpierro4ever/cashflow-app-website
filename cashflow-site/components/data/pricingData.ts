export const pricingPlans = [
  {
    name: "Bronze Plan",
    price: "100 CFA/month",
    features: [
      { text: "Free transaction limit: 50,000 CFA", included: true },
      { text: "20% cashback on transactions", included: true },
      { text: "Max cash-in limit: 25,000 CFA/day", included: true },
      { text: "Wallet-to-Wallet transfers", included: true },
      { text: "Group wallet access", included: false },
      { text: "Taxi Mode (pay only)", included: false },
      { text: "Boost Payment", included: false },
    ],
  },
  {
    name: "Silver Plan",
    price: "500 CFA/month",
    features: [
      { text: "Free transaction limit: 100,000 CFA", included: true },
      { text: "25% cashback on transactions", included: true },
      { text: "Max cash-in limit: 100,000 CFA/day", included: true },
      { text: "Wallet-to-Wallet transfers", included: true },
      { text: "Group wallet access", included: true },
      { text: "Taxi Mode (pay only)", included: false },
      { text: "Boost Payment", included: false },
    ],
  },
  {
    name: "Gold Plan",
    price: "1,000 CFA/month",
    features: [
      { text: "Free transaction limit: 500,000 CFA", included: true },
      { text: "30% cashback on transactions", included: true },
      { text: "Max cash-in limit: 200,000 CFA/day", included: true },
      { text: "Wallet-to-Wallet transfers", included: true },
      { text: "Group wallet access", included: true },
      { text: "Taxi Mode (pay only)", included: true },
      { text: "Boost Payment", included: true },
    ],
  },
];
