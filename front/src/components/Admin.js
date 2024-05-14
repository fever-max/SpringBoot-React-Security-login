import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin', { withCredentials: true });
        console.log(response.data);
        setIsAdmin(response.data); //
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };
    fetchData();
  }, []);

  // 어드민 여부에 따라 렌더링
  return <div>{isAdmin ? <div>어드민 페이지입니다.</div> : <div>권한이 없습니다.</div>}</div>;
}

export default Admin;
