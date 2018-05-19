import React from 'react';
import styles from './index.css';

export class ExampleComponent extends React.Component {

  render() {
    console.log(styles);
    return <div className="example">A</div>;
  }

}
