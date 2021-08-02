export const fetchGameList = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchDB = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.results;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const slugSearch = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
