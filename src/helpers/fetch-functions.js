export const fetchGameList = async () => {
  try {
    const response = await fetch("/gameList");
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
