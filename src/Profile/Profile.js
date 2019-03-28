import React, { Component } from 'react';
import AvatarImage from '../Assets/Images/artur-static.png';
import './Profile.css'

class Profile extends Component {
  render() {
    return (
      <section className="Profile">
        <span className="Profile__Description">Full Stack Developer</span>
        <img className="Profile__Avatar" src={AvatarImage} alt="Artur's avatar"></img>
      </section>
    );
  }
}

export default Profile;
