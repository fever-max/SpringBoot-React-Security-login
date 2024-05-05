import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', user.email);
      formData.append('password', user.password);

      const response = await axios({
        url: 'http://localhost:8080/loginProc',
        method: 'POST',
        data: formData,
        withCredentials: true,
      });
      if (response) {
        alert('로그인 성공! ');
        console.log('유저 이메일: ' + response.data.email);
        console.log('권한: ' + response.data.authorities);
        navigate('/userInfo', { state: { userData: response.data } });
      }
    } catch (error) {
      console.log('로그인 에러: ', error);
    }
  };

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="이름" value={user.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" value={user.password} onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
