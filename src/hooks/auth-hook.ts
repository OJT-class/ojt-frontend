import { useState, useCallback, useEffect } from "react";

// let logoutTimer: Window["setTimeout"];
let logoutTimer: ReturnType<typeof setTimeout>;

export const useAuth = () => {
  const [token, setToken] = useState<string | boolean | null>(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>();
  const [userId, setUserId] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");

  const login = useCallback((uid: string, token: string | null, userName: string, expirationDate: Date) => {
    setToken(token);
    setUserId(uid);
    setName(userName);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        name: userName,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setName(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData") || '{}');
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.name,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId, name };
};
