const getHandlingPromise = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("The operation completed.");
  }
};
getHandlingPromise();
