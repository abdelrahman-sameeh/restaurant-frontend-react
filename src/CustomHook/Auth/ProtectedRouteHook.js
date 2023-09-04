import React, { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  const user = localStorage.user && JSON.parse(localStorage.user);

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  const [notAuth, setNotAuth] = useState(true);



  useEffect(() => {

    if(user && user._id){
      setNotAuth(false)
      setIsAuth(true)
    }else{
      setNotAuth(true)
      setIsAuth(false)
    }

    if (user && user.role === "user") {
      setIsUser(true);
    } else if (user && user.role === "admin") {
      setIsAdmin(true);
    } else if (user && user.role === "delivery") {
      setIsDelivery(true);
    }
  }, []);

  return [isUser, isAdmin, isDelivery, notAuth, isAuth];
};

export default ProtectedRouteHook;
