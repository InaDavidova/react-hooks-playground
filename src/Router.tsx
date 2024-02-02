import React from "react";
import UseStateExample from "./components/UseState.tsx";
import { Routes, Route } from "react-router-dom";
import UseEffectExample from "./components/UseEffect.tsx";
import UseRefExample from "./components/UseRef.tsx";
import UseCallbackExample from "./components/UseCallback.tsx";
import UseMemoExample from "./components/UseMemo.tsx";
import UseContextExample from "./components/UseContext.tsx";
import UseReducerExample from "./components/UseReducer.tsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<UseStateExample />} />
      <Route path="/use-state" element={<UseStateExample />} />
      <Route path="/use-effect" element={<UseEffectExample />} />
      <Route path="/use-callback" element={<UseCallbackExample />} />
      <Route path="/use-memo" element={<UseMemoExample />} />
      <Route path="/use-ref" element={<UseRefExample />} />
      <Route path="/use-context" element={<UseContextExample />} />
      <Route path="/use-reducer" element={<UseReducerExample />} />
    </Routes>
  );
}

export default Router;
