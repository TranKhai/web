import { Link } from 'react-router-dom'
import React, { Component } from "react";
import fire from '../config/fire';
import './App.css';

class Login extends React.Component() {
  constructor(props){
    super(props);
    this.state = {
      username:null,
    }
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((username) =>{
      if (username){
        this.setState({ username });
      }else{
        this.setState({username : null});
      }
    })
  }
  dangNhap (){
    const username = document.querySelector("#phoneNum").value;
    const pass = document.querySelector("#password").value;

    fire.auth().SignInWithEmailPassword(username, pass).then((u)=> {
      console.log("accept");
    }).catch((err)=>{
      console.log("Error " + err.toString());
    })
  }
  render(){
    return (
      <div>
      <div className="login">
        <h2>LAZMAL ĐẶT ĐƠN ẢO</h2>
        <h4>Người nghèo và tầng lớp trung lưu làm việc vì tiền, còn người giàu để tiền làm việc cho họ</h4>
        <input type="text" id="phoneNum" placeholder="Vui lòng nhập số điện thoại"/>
        <br />
        <input type="password" id="pass" placeholder="Vui lòng nhập mật khẩu"/>
        <br/>
        <button onClick={this.dangNhap}>Đăng nhập</button>
        <br/>
        <Link to='/signin'><button>Đăng ký</button></Link>
      </div>
      </div>
    );
  }
}

export default Login;
