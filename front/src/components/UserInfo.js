import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState({
    userName: '',
    userEmail: '',
    role: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', {
          withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
        });
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error checking user status:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      alert('로그아웃 완료');
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  return (
    <div>
      <h1>마이페이지</h1>
      <p>이름: {user.userName}</p>
      <p>이메일: {user.userEmail}</p>
      <p>권한: {user.role}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default UserInfo;
