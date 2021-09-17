import React, { useState, useEffect, Fragment } from "react";
import PlatformFilter from "../components/Filters/PlatformFilter";

import styles from "./Search.module.css";

import { useParams } from "react-router-dom";

import MediumProdCard from "../organisms/layout/MediumProdCard";
// Helpers
import {
  fetchFilteredDB,
  fetchGameList,
  updateFilteredDB,
} from "../helpers/fetch-functions";
import LoadingSpinner from "../organisms/ui-components/LoadingSpinner";
import { platformConverter } from "../helpers/platform-converter";

function FilteredGamesList() {
  const url = window.location.pathname;

  const [isLoading, setIsLoading] = useState(false);
  const [renderList, setRenderList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [platformID, setPlatformID] = useState(null);

  const { filter } = useParams();

  let filteredList = [];

  useEffect(() => {
    setIsLoading(true);

    // Converts the url param to a platform ID that fits the API
    setPlatformID(platformConverter(filter));

    async function init() {
      await fetchFilteredList(platformID);
      setIsLoading(false);
    }
    init();
  }, [url, filter]);

  const fetchFilteredList = async (platformID) => {
    try {
      filteredList = await updateFilteredDB(
        `http://localhost:3001/filterPlatform?platforms=${platformID}`
      );
      setNextPage(filteredList.next);
      setRenderList(filteredList.results);
    } catch (err) {
      console.log(err);
    }
  };

  const filterHandler = async (platformID, orderBy, genre) => {
    setIsLoading(true);
    try {
      filteredList = await updateFilteredDB(
        `http://localhost:3001/refinedPlatformFilter?platforms=${platformID}&genres=${genre}&ordering=${orderBy}`
      );
      console.log(filteredList);
      setRenderList(filteredList.results);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const seeMoreHandler = async () => {
    setIsLoading(true);
    try {
      filteredList = await fetchGameList(nextPage);
      setNextPage(filteredList.next);
      setRenderList((prevState) => [...prevState, ...filteredList.results]);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles["user-controls"]}>
          <PlatformFilter updateFilter={filterHandler} platform={platformID} />
        </div>
        <div className={styles["content-container"]}>
          {isLoading ? (
            <Fragment>
              <LoadingSpinner />
            </Fragment>
          ) : (
            renderList.map((game) => {
              return <MediumProdCard key={game.id} data={game} />;
            })
          )}
        </div>
        <div className={styles["user-btn"]}>
          <button className={styles["see-more-btn"]} onClick={seeMoreHandler}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilteredGamesList;
