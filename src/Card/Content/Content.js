import React, {Component} from 'react';
import styles from './Content.scss';

class Content extends Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className={styles.content}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
