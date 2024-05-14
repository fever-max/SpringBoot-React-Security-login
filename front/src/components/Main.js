import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import UserInfo from './UserInfo';
import Admin from './Admin';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Main;
