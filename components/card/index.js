import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className={styles.card} >
        <div className={styles.cardHeader} >
          <div className={styles.iconHeader} >
            <img src={this.props.iconFavorites} className={styles.productIcon} />
          </div>
          <div className={styles.imageHeader} >
            <img src={this.props.imgUrl} className={styles.productImg} />
          </div>
          <div className={styles.iconHeader} >
            <img src={this.props.iconCart} className={styles.productIcon} />
            <img src={this.props.iconDetails} className={styles.productIcon} />
          </div>
        </div>
        <div className={styles.divText}>
          <h4 className={styles.title}> {this.props.name}</h4>
          <p className={styles.block_with_text}> {this.props.description}</p>
        </div>
      </div>
    );
  }
}

Card.PropTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.string,
  iconFavorites: PropTypes.string,
  iconDetails: PropTypes.string,
  iconCart: PropTypes.string,
};
