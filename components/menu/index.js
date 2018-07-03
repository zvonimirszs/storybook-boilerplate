import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Menu extends React.Component {
  render() {
    return (
      <div className={styles.navigation}>
        <ul>
          {
            this.props.links.map(link => (<li key={link.id} id={link.id} name='menuMain' className={link.active ? styles.active : undefined}>{link.content}</li>))
          }
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  links: PropTypes.array,
};
