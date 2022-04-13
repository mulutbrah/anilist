export const minutesToHms = (d) => {
  if (!d) return "";

  d = Number(d) * 60;

  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);

  const hDisplay = h > 0 ? (h === 1 ? `${h} hour ` : `${h} hours `) : "";
  const mDisplay = m > 0 ? (m === 1 ? `${m} minute` : `${m} minutes`) : "";

  return hDisplay + mDisplay;
};
