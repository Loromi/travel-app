// POST fetched data to server-side endpoint
const postWeatherData = async (url = ``, data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.log("error", error);
  }
};

export { postWeatherData };
