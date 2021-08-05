import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import styles from "./Search.module.css";

import { useParams } from "react-router-dom";

import MediumProdCard from "../organisms/layout/MediumProdCard";
// Helpers
import { fetchGameList, fetchGameListPage } from "../helpers/fetch-functions";
import PrimaryBtn from "../organisms/buttons/PrimaryBtn";

function FilteredGamesList() {
  const [isLoading, setIsLoading] = useState(false);
  const [renderList, setRenderList] = useState([]);
  const [startSliceCounter, setStartSliceCounter] = useState(0);
  const [endSliceCounter, setEndSliceCounter] = useState(19);

  const { filter } = useParams();

  let listToFilter = [];
  let filteredList = [];

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      await fetchFilteredList(filter);
      setIsLoading(false);
    }
    init();
  }, []);

  //   const fetchFilteredList = async (chosenFilter) => {
  //     for (let page = 1; page < 12; page++) {
  //       let initData = await fetchGameListPage(
  //         `http://localhost:3001/filteredGameList`,
  //         page
  //       );
  //       listToFilter.push(...initData.results);
  //       //   setMasterList((prevState) => [...prevState, ...initData.results]);
  //     }
  //     console.log(listToFilter);

  //     listToFilter.forEach((game) => {
  //       const platformsArr = game.platforms;
  //       for (let i = 0; i < platformsArr.length; i++) {
  //         if (platformsArr[i].platform.slug === `${chosenFilter}`)
  //           filteredList.push(game);
  //       }
  //     });
  //     console.log(filteredList);
  //   };

  const fetchFilteredList = async (chosenFilter) => {
    while (filteredList.length < 20) {
      let startingPage = 1;
      let endPage = 12;
      let initData = [];
      for (startingPage; startingPage < endPage; startingPage++) {
        initData = await fetchGameListPage(
          `http://localhost:3001/filteredGameList`,
          startingPage
        );
        listToFilter.push(...initData.results);
        //   setMasterList((prevState) => [...prevState, ...initData.results]);
      }
      console.log(startingPage);

      startingPage = endPage + 1;
      endPage = startingPage + startingPage - 1;
      console.log(startingPage);

      console.log(startingPage, endPage);

      console.log(listToFilter);

      listToFilter.forEach((game) => {
        const platformsArr = game.platforms;
        for (let i = 0; i < platformsArr.length; i++) {
          if (platformsArr[i].platform.slug === `${chosenFilter}`)
            filteredList.push(game);
        }
      });
      initData = [];
      listToFilter = [];
    }

    setRenderList(filteredList.slice(startSliceCounter, endSliceCounter));
    setStartSliceCounter(endSliceCounter + 1);
    setEndSliceCounter(endSliceCounter + endSliceCounter - 1);
  };

  const seeMoreHandler = () => {
    setIsLoading(true);
    setRenderList((prevState) => [
      ...prevState,
      filteredList.slice(startSliceCounter, endSliceCounter),
    ]);
    setIsLoading(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles["user-controls"]}>
          <Filter />
        </div>
        <div className={styles["content-container"]}>
          {isLoading ? (
            <h1 className={styles["error-msg"]}>Loading</h1>
          ) : (
            renderList.map((game) => {
              return <MediumProdCard key={game.id} data={game} />;
            })
          )}
          {/* <PrimaryBtn onClick={seeMoreHandler} /> */}
        </div>
      </div>
    </div>
  );
}

export default FilteredGamesList;
