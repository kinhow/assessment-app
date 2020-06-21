import React, { useState, useEffect } from "react";
import rGeneration from "../../res/generation";
import Items from '../../components/items';
import styles from "./genSix.module.scss";

const GenSix = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getValue = async () => {
    const data = await rGeneration.sixth();
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getValue();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let loadingList = [];
  for (let i = 0; i < 9; i++) {
    loadingList.push(<Items loading={true} key={i} />);
  }

  if (loading) {
    return (
      <div className={styles.pokemonList}>
        {loadingList}
      </div>
    )
  }

  return (
    <div className={styles.pokemonList}>
      {list.map(item => {
        return (
          <Items
            key={item.id}
            gen={'gen-6'}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default GenSix;
