import React from "react";
import UseStateExample from "./components/UseState.tsx";
import { Routes, Route } from "react-router-dom";
import UseEffectExample from "./components/UseEffect.tsx";
import UseRefExample from "./components/UseRef.tsx";
import UseCallbackExample from "./components/UseCallback.tsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<UseStateExample />} />
      <Route path="/use-state" element={<UseStateExample />} />
      <Route path="/use-effect" element={<UseEffectExample />} />
      <Route path="/use-ref" element={<UseRefExample />} />
      <Route path="/use-callback" element={<UseCallbackExample />} />
    </Routes>
  );
}

export default Router;
