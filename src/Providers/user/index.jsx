import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import api from "../../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const [userId, setUserId] = useState(localStorage.getItem("user_id") || "");
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );
  const getUserInfoProfile = () => {
    if (localStorage.getItem("user_info").length) {
      api
        .get(`users/${userId}/`, {
          headers: { Authorization: `Token ${userToken}` },
        })
        .then((res) => {
          localStorage.setItem("user_info", JSON.stringify(res.data));
          setUserInfo(res.data);
        });
    }
  };

  const [userWallets, setUserWallets] = useState();

  const getUserWallets = () => {
    api
      .get("http://localhost:8000/api/wallets/")
      .then((res) => setUserWallets(res.data));
  };

  const getUserInfo = () => {
    api.get(`users/${userId}/`).then((res) => setUserId(res.data));
  };

  return (
    <UserContext.Provider
      value={{
        getUserInfoProfile,
        userInfo,
        setUserInfo,
        userWallets,
        setUserWallets,
        getUserWallets,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
