import React from 'react';
import { media } from '../../utils';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import lowerFirst from 'lodash/lowerFirst';
import Tag from '../../components/tag';
import Image from '../../components/image';
import styles from './items.module.scss';

const Items = (props) => {
  const { loading, data, gen } = props;

  if (loading === true) {
    return (
      <div className={styles.item}>
        <div className={styles.image}>
          <Skeleton width={215} height={215} />
        </div>
        <div className={styles.name}>
          <Skeleton height={30} />
        </div>

        <div className={styles.types}>
          <Skeleton width={'50%'} height={30} />
          <Skeleton width={'50%'} height={30} />
        </div>
      </div>
    )
  }

  if (data) {
    let typeFirst = lowerFirst(data.type1),
      typeSecond = lowerFirst(data.type2);

    return (
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src={media(`items/${gen}/${data.name}.png`)} alt={data.name} />
        </div>
        <div className={styles.name}>{data.name}</div>

        <div className={styles.types}>
          <Tag type={data.type1} name={typeFirst} showIcon={data.type1} />
          <Tag type={data.type2} name={typeSecond} showIcon={data.type2} />
        </div>
      </div>
    );
  }
};

Items.propTypes = {
  gen: PropTypes.string,
  children: PropTypes.node,
};

Items.defaultProps = {
  gen: ''
};

export default Items;