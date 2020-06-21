import React from 'react';
import * as PropTypes from 'prop-types';
import { media } from '../../utils';
import Image from '../../components/image';
import styles from './tag.module.scss';

const Tag = (props) => {
  const {
    name,
    type,
    showIcon,
    ...rest
  } = props;

  const tagClassName = [styles.tag, styles[`${type}`]].join(' ').trim();

  return (
    <>
      {showIcon !== '' &&
        <div className={tagClassName} {...rest}>
          <div className={styles.icon}>
            <Image src={media(`types/${name}.png`)} />
          </div>
          <div className={styles.typeName}>{name}</div>
        </div>
      }
    </>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  showIcon: PropTypes.string,
};

Image.defaultProps = {
  name: '',
  type: ''
};

export default Tag;
