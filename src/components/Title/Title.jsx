import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './Title.scss'

class Title extends Component {
  render() {
    return (
      <section className="title">
        <div className="title__left">
            <h3>{this.props.title || ''}</h3>
            <div>Hola</div>
        </div>
        <div className="title__right">
            <FontAwesomeIcon className="title__right__item" icon={faCommentAlt} />
            <FontAwesomeIcon className="title__right__item" icon={faEllipsisH} />
        </div>
      </section>
    );
  }
}

export default Title;
