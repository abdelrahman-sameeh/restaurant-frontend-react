import React from "react";

const ProfileHook = () => {
  let user 

  if (localStorage.user) {
    user = JSON.parse(localStorage.user);
  }

  return [user];
};

export default ProfileHook;
