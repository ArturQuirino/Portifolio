import React from 'react';
import AvatarImage from '../Assets/Images/artur-static.png';
import './Profile.css';


function Profile() {
  return (
    <section className="Profile">
      <span className="Profile__Description">Full Stack Developer</span>
      <img className="Profile__Avatar" src={AvatarImage} alt="Artur's avatar" />
    </section>
  );
}

export default Profile;
