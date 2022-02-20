import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

type Props = {};

export default function Router({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="text-red-600">Test</div>} />
      </Routes>
    </BrowserRouter>
  );
}
