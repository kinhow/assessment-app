import React from "react";
import * as PropTypes from "prop-types";
import styles from "./image.module.scss";

const Image = (props) => {
  const { className, altName, ...rest } = props;

  const imageClassName = [styles.image];
  className && imageClassName.push(className);

  return <img className={imageClassName.join(" ")} alt={altName} {...rest} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: "",
  className: "",
};

export default Image;
