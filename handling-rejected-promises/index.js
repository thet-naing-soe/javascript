const getHandlingPromise = async () => {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/jsonplaceholder/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Holiday Nightmares",
          body: "When I was kidnapped in Scotland…",
          userID: 100,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
