const updateImg = async () => {
  const response = await fetch("http://localhost:3000/img")
    .then(function (response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    })
    .then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }

      return data;
    });

  try {
    document.querySelector(
      "#picture"
    ).innerHTML = `<img src="${responseImg.url}" alt="img destination">`;
  } catch (error) {
    console.log("error in updateImg()", error);
  }
};

export { updateImg };
