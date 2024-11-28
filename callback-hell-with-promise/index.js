// upload a file
const uploadFile = () => {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Uploading file...");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
// process a file
const processFile = () => {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Processing file...");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
// notify a user
const notifyFile = () => {
  return new Promise((resolve, reject) => {
    console.log("Step 3: Notifying user...");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
try {
  await uploadFile();
  await processFile();
  await notifyFile();
  console.log("All steps completed!");
} catch (err) {
  console.log(err);
}
