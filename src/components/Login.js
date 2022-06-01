import { Link } from 'react-router-dom'
import './App.css';

function Login() {
  return (
    <div>
    <div className="login">
      <h2>LAZMAL ĐẶT ĐƠN ẢO</h2>
      <h4>Người nghèo và tầng lớp trung lưu làm việc vì tiền, còn người giàu để tiền làm việc cho họ</h4>
      <input type="text" id="phoneNum" placeholder="Vui lòng nhập số điện thoại"/>
      <br />
      <input type="password" id="pass" placeholder="Vui lòng nhập mật khẩu"/>
      <br/>
      <button>Đăng nhập</button>
      <br/>
      <Link to='/signin'><button>Đăng ký</button></Link>
    </div>
    </div>
  );
}

export default Login;
