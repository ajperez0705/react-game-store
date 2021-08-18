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

// These helpers are used to filter through the API
export const fetchFilteredDB = async (path, platform) => {
  try {
    const response = await fetch(`${path}/${platform}`);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateFilteredDB = async (path) => {
  try {
    console.log(path);
    const response = await fetch(`${path}`);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
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

export const slugSearch = async (path, abortController) => {
  try {
    const response = await fetch(path, { signal: abortController.signal });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const gameSummary = async (path, options) => {
  try {
    const response = await fetch(path, options);
    const data = await response.json();
    console.log(data);
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
