import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import UseStateExample from "./components/UseState.tsx";
import Router from "./Router.tsx";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to={"use-state"}>useState</Link>
          </li>
          <li>
            <Link to={"use-effect"}>useEffect</Link>
          </li>{" "}
          <li>
            <Link to={"use-ref"}>useRef</Link>
          </li>
          <li>
            <Link to={"use-callback"}>useCallback</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
