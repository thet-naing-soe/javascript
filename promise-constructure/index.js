const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation field.");
  }
});

try {
  const response = await promise;
  console.log(response);
} catch (err) {
  console.log(err);
}
