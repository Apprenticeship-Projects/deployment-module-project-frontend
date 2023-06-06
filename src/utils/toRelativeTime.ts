const TIME_UNITS: {
  [unit in Intl.RelativeTimeFormatUnit]?: number;
} = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
} as const;

const formatter = new Intl.RelativeTimeFormat("en", {numeric: "auto"});

export const toRelativeTime = (d1: Date, d2 = new Date()) => {
  const elapsed = d1.getTime() - d2.getTime();

  for (const unit of Object.keys(TIME_UNITS) as (keyof typeof TIME_UNITS)[]) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const time = TIME_UNITS[unit]!;
    if (Math.abs(elapsed) > time || unit === "second") {
      return formatter.format(Math.round(elapsed / time), unit);
    }
  }
};
