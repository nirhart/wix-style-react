import React, {Component} from 'react';
import styles from './Card.scss';
import Content from './Content';
import Header from './Header';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';

class Card extends Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className={styles.card}>
        {this.props.children}
      </div>
    );
  }
}

Card.Content = Content;
Card.Header = Header;
Card.LinkHeader = LinkHeader;
Card.ButtonHeader = ButtonHeader;

export default Card;
