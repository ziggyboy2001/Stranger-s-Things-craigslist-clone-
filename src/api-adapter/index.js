const BASE_URL = "https://strangers-things.herokuapp.com";

export const getPosts = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });
    const reult = await response.json();
    return XPathResult;
  } catch (error) {
    console.log(error);
  }
};
export const getIndividualFPost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postThePost = async (title, article) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: article,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};