import React from 'react';

const UserProfile = (props) => {
  if (props.currentUser) {
    return (
      <h1>{props.currentUser.email}</h1>
    )
  } else {
    return null
  }
}

export default UserProfile;