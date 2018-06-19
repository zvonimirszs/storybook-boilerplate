import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Image extends React.Component {
  render() {
    return (
      <img src={this.props.imgUrl} className={this.props.class} />
    );
  }
}

Image.PropTypes = {
  imgUrl: PropTypes.string,
  class: PropTypes.string,
};
