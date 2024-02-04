import React, { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Router from "./Router.tsx";

type Context = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Context>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <main className={isDarkMode ? "dark" : "light"}>
        <h1>React Hooks</h1>
        <hr />
        <nav>
          <ul>
            <NavLink
              to={"use-state"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useState
            </NavLink>
            <NavLink
              to={"use-effect"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useEffect
            </NavLink>
            <NavLink
              to={"use-callback"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useCallback
            </NavLink>
            <NavLink
              to={"use-memo"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useMemo
            </NavLink>
            <NavLink
              to={"use-ref"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useRef
            </NavLink>
            <NavLink
              to={"use-context"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useContext
            </NavLink>
            <NavLink
              to={"use-reducer"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              useReducer
            </NavLink>
            <NavLink
              to={"custom-hooks"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Custom Hooks
            </NavLink>
          </ul>
        </nav>
        <hr />
        <Router />
      </main>
    </ThemeContext.Provider>
  );
}
