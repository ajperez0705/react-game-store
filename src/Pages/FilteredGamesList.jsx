import React, { useState, useEffect, Fragment } from "react";
import PlatformFilter from "../components/Filters/PlatformFilter";

import styles from "./Search.module.css";

import { useParams } from "react-router-dom";

import MediumProdCard from "../organisms/layout/MediumProdCard";
// Helpers
import {
  fetchFilteredDB,
  fetchGameList,
  fetchGameListPage,
  updateFilteredDB,
} from "../helpers/fetch-functions";
import PrimaryBtn from "../organisms/buttons/PrimaryBtn";
import LoadingSpinner from "../organisms/ui-components/LoadingSpinner";

function FilteredGamesList() {
  const url = window.location.pathname;

  const [isLoading, setIsLoading] = useState(false);
  const [renderList, setRenderList] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  const { filter } = useParams();

  let filteredList = [];

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      await fetchFilteredList(filter);
      setIsLoading(false);
    }
    init();
  }, [url]);

  const fetchFilteredList = async (chosenFilter) => {
    console.log(chosenFilter);
    try {
      filteredList = await fetchFilteredDB(
        `http://localhost:3001/filterPlatform`,
        chosenFilter
      );
      console.log(filteredList);
      setNextPage(filteredList.next);
      setRenderList(filteredList.results);
    } catch (err) {
      console.log(err);
    }
  };

  const filterHandler = async (chosenFilter, orderBy, genre) => {
    setIsLoading(true);
    try {
      filteredList = await updateFilteredDB(
        `http://localhost:3001/refinedPlatformFilter?platforms=${chosenFilter}&genres=${genre}&ordering=${orderBy}`
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
          <PlatformFilter updateFilter={filterHandler} platform={filter} />
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
          <button onClick={seeMoreHandler}>See More</button>
        </div>
      </div>
    </div>
  );
}

export default FilteredGamesList;
