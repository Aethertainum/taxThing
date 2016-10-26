class WitholdingChart {
  constructor() {
    this.daily = { period: 365, amt: 15.4 };
    this.weekly = { period: 52, amt: 76.9 };
    this.biweekly = { period: 26, amt: 153.8 };
    this.semimonthly = { period: 24, amt: 166.7 };
    this.monthly = { period: 12, amt: 333.3 };
    this.quarterly = { period: 4, amt: 1000 };
    this.semiannually = { period: 2, amt: 2000 };
    this.annually = { period: 1, amt: 4000};
  }
} 

export default new WitholdingChart();
