import React, {Component} from 'react';
import Membership from './Membership'
import Login from './login';
import BlogInput from './BlogInput';

const App=()=>{
  return (
    <div>
      <h1>회원가입</h1>
      <Membership />
      <h2>로그인</h2>
      <Login />
      <h3>게시판</h3>
      <BlogInput/>
    </div>
  )
};

export default App;
