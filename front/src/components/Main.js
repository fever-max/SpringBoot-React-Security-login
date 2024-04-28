import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Join from './Join';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default Main;
