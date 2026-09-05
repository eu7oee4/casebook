export const chart = {
  series: ["#3e6e2e", "#4a7fc1", "#e07a45", "#b3afa3"] as const,
  accent: "#3e6e2e",
  neutral: "#b3afa3",
  ink: "#17160f",
  ink2: "#5a5850",
  ink3: "#8c8980",
  grid: "#e3e0d6",
  axis: "#cfcbbf",
  surface: "#fbfaf6",
  wash: "#efece3",
};

export const axisProps = {
  axisLine: { stroke: chart.axis, strokeWidth: 1 },
  tickLine: false as const,
  tick: { fill: chart.ink3, fontSize: 11, fontFamily: "var(--font-mono)" },
};

export const gridProps = {
  stroke: chart.grid,
  strokeWidth: 1,
  vertical: false,
};
