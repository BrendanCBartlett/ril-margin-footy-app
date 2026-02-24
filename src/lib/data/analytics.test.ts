import { statsData, revenueData, trafficData, goalsData } from "@/lib/data";

describe("analytics mock data", () => {
  it("has 4 stats cards", () => {
    expect(statsData).toHaveLength(4);
  });

  it("each stat card has required fields", () => {
    statsData.forEach((stat) => {
      expect(stat).toHaveProperty("title");
      expect(stat).toHaveProperty("value");
      expect(stat).toHaveProperty("change");
      expect(stat).toHaveProperty("sparkline");
      expect(stat.sparkline).toHaveLength(12);
    });
  });

  it("has 12 months of revenue data", () => {
    expect(revenueData).toHaveLength(12);
  });

  it("revenue data has required fields with positive values", () => {
    revenueData.forEach((point) => {
      expect(point).toHaveProperty("month");
      expect(point).toHaveProperty("revenue");
      expect(point).toHaveProperty("orders");
      expect(point).toHaveProperty("profit");
      expect(point.revenue).toBeGreaterThan(0);
      expect(point.orders).toBeGreaterThan(0);
      expect(point.profit).toBeGreaterThan(0);
    });
  });

  it("traffic sources sum to 100%", () => {
    const total = trafficData.reduce((sum, item) => sum + item.value, 0);
    expect(total).toBe(100);
  });

  it("goals have valid progress", () => {
    goalsData.forEach((goal) => {
      expect(goal.current).toBeLessThanOrEqual(goal.target);
      expect(goal.current).toBeGreaterThan(0);
    });
  });
});
