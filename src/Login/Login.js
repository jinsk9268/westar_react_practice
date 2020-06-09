import React from "react";
import './Login.css';
import logo from './logo_text.png';

export class LoginJs extends React.Component {
    render() {
        return(
        <div className="body-css">
            <main className="login-container">
                <img className="img-logo" alt="로고" src={logo} />
                <input className="input-info" type='text' placeholder='전화번호, 사용자 이름 또는 이메일' />
                <input className="input-info" type='password' placeholder='비밀번호' />
                <button>로그인</button>
                <div className="pw-forgot">비밀번호를 잊으셨나요?</div>
            </main>
        </div>
        );
    }
}

export default LoginJs;

document.addEventListener('keyup', function() {
    const idCheck = document.getElementsByClassName("input-info")[0];
    const pwCheck = document.getElementsByClassName("input-info")[1];
    const btChange = document.getElementsByTagName("button")[0];

    btChange.style.backgroundColor = idCheck.value && pwCheck.value ? '#0562f7' : 'rgba(0,149,246,.3)'
})