export const fetchGameList = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGameListPage = async (path, pageNum) => {
  try {
    const response = await fetch(`${path}?page=${pageNum}`);
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

export const gameSummary = async (path, gameName, options) => {
  try {
    const response = await fetch(`${path}?gameName=${gameName}`, options);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const purchaseDB = async (path, options) => {
  try {
    const response = await fetch(path, options);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
