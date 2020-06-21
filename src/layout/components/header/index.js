import React from "react";
import { NavLink } from "react-router-dom";
import { media } from "../../../utils";
import Image from "../../../components/image";
import styles from "./header.module.scss";

const urlName = [
  { path: "/gen-1", name: "Gen I" },
  { path: "/gen-2", name: "Gen II" },
  { path: "/gen-3", name: "Gen III" },
  { path: "/gen-4", name: "Gen IV" },
  { path: "/gen-5", name: "Gen V" },
  { path: "/gen-6", name: "Gen VI" },
  { path: "/gen-7", name: "Gen VII" },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={"/"} className={styles.logo}>
          <div className={styles.icon}>
            <Image src={media("icon/icon.svg")} />
          </div>
          <div className={styles.title}>Pokemon</div>
        </NavLink>

        <div className={styles.list}>
          {urlName.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              activeClassName={styles.active}
              className={styles.link}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
