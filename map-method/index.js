const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];
const conversionFactorMilesToKm = 1.6;
const convertMilesToKms = () => {
  return distanceWalkedMilesArr.map(
    (distanceMiles, index) =>
      `${index}: ${distanceMiles * conversionFactorMilesToKm}`
  );
};
console.log(convertMilesToKms());
