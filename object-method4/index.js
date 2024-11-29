const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: true,
};

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: true,
};

const user3 = Object.create(null);
user3.username = "Tom";
user3.subscriptionLevel = "gold";
user3.accessPremiumFeature = true;
// console.log(Object.hasOwn(user3, "username"));
console.log(user3);
const canAccessPremiumFeature = (userObj, prop) => {
  return Object.hasOwn(userObj, prop) && userObj.accessPremiumFeature;
};
console.log(canAccessPremiumFeature(user1, "accessPremiumFeature"));
console.log(canAccessPremiumFeature(user2, "accessPremiumFeature"));
console.log(canAccessPremiumFeature(user3, "accessPremiumFeature"));
