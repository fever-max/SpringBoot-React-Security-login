import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin', {
          withCredentials: true, // 자격 증명(쿠키, 인증 헤더 등)을 포함하여 HTTP 요청
        });
        if (response.status === 200) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
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
      {isAdmin ? <div>어드민 페이지입니다.</div> : <div>권한이 없습니다.</div>}
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Admin;
