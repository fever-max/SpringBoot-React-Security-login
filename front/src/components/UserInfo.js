import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function UserInfo() {
  const location = useLocation();
  const { email, authorities } = location.state.userData;

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      alert('로그아웃 완료');
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const goToAdminPage = () => {
    window.location.href = '/admin';
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이메일: {email}</p>
      <p>권한: {authorities}</p>
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={goToAdminPage}>어드민 페이지</button>
    </div>
  );
}

export default UserInfo;
