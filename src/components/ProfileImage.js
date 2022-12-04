import React from "react";
import PropTypes from "prop-types";

class ProfileImage extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const image = this.props.image;
    const name = this.props.name;

    return (
      <aside className="aside">
        <img src={image} alt={name} />
        <p>
          My name is <span className="name">{name}</span> 
        </p>
      </aside>
    );
  }
};

export default ProfileImage;