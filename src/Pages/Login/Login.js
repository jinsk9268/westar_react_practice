import React from "react";
import './Login.scss';
import logo from '../../Images/logo_text.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    
    constructor() {    
        super();

        this.state = {
            userInputId: "",
            userInputPw: "",
            btnChangeId: "",
            btnChangePw: "",
            idCheck: ""
        };
    }

    changeHandlerId = (e) => {
        console.log(e.target.name, " : ", e.target.value);
        //input 태그에 name속성 state key와 똑같이 부여해서 []안에 넣어줘도됨
        this.setState({[e.target.name]: e.target.value});
        this.setState({btnChangeId: e.target.value.includes("@")});
        this.setState({idCheck: e.target.value.includes('.com', '.kr')})
    }

    changeHandlerPw = (e) => {
        console.log(e.target.name, " : ", e.target.value);
        this.setState({[e.target.name]: e.target.value});
        this.setState({btnChangePw: e.target.value.length >= 5 ? true : false})
    }
    
    changeHandlerBgColor = () => {
        return this.state.btnChangeId && this.state.btnChangePw 
                ? "login-button trueColor" 
                : "login-button falseColor"
    }

    goToMainup() {
        //this.props.history.push('/main');
        if (this.state.btnChangeId && this.state.btnChangePw && this.state.idCheck) {
            this.props.history.push('/main');
        } else {
            alert('로그인 조건에 맞지 않습니다. 다시 확인해주세요')
        } 
    }

    render() {
        return (
            <div className="body-css">
                <main className="login-container">
                    <img className="img-logo" alt="로고" src={logo} />
                    <input 
                        className="input-info" 
                        type='text' 
                        placeholder='전화번호, 사용자 이름 또는 이메일' 
                        name="userInputId"
                        /*value={this.state.userInputId}*/
                        onChange={this.changeHandlerId}
                    />
                    <input 
                        className="input-info" 
                        type='password' 
                        placeholder='비밀번호' 
                        name="userInputPw"
                        /*value={this.state.userInputPw}*/
                        onChange={this.changeHandlerPw}
                    />
                    
                    <button 
                        className={this.changeHandlerBgColor()}
                        onClick={this.goToMainup.bind(this)}
                    >
                        로그인
                    </button>
                    
                    <div className="pw-forgot">비밀번호를 잊으셨나요?</div>
                </main>
            </div>
        );
    }
}

export default withRouter(Login);
    
// Link 태그 이용

//                     <Link to="/main">   
//                         <button 
//                             className={this.changeHandlerBgColor()}
//                         >
//                             로그인
//                         </button>
//                     </Link>


// class LoginJs extends React.Component {
//     render() {
//         return(
//             <>
//                 <LoginFirst />
//             </>
//         );
//     }
// }

// export default withRouter(LoginFirst);

/* input 여러개로 관리 가능 근데 이벤트 들어가면 각각 쪼개야
changeHandlerId = (e) => {
    //e.target.name 은 해당 input의 name을 가르켜 input 여러개를 하나로 관리 가능
    console.log(e.target.name, " : ", e.target.value);
    this.setState({[e.target.name]: e.target.value});
}
*/

/*
class LoginEvent extends React.Component {
    constructor() {
        super();

        this.state = {
            userInputId: "",
            userInputPw: ""
        };
    }

    changeHandler = (e) => {
        console.log(e.target.name, " : ", e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

}
*/

/*
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
*/

/*
document.addEventListener('keyup', function() {
    const idCheck = document.getElementsByClassName("input-info")[0];
    const pwCheck = document.getElementsByClassName("input-info")[1];
    const btChange = document.getElementsByTagName("button")[0];

    btChange.style.backgroundColor = idCheck.value && pwCheck.value ? '#0562f7' : 'rgba(0,149,246,.3)'
})
*/