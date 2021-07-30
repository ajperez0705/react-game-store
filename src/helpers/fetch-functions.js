export const fetchGameList = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
