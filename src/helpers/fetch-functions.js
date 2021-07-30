export const fetchGameList = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const searchDB = async (userInput) => {
  try {
    const response = await fetch(userInput);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
