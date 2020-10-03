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

    // 백엔드에서 요청한 대로 보내주기, 회원가입
    // fetch('api 주소', {
    //     method: 'post',
    //     body: JSON.stringify({
    //         email: this.state.userInputId // 벨류로 주기, 백엔드에 있는 아이디 값으로 설정해줘야 하므로
    //         password: this.state.userInputPw
    //     })
    // }) 
    // .then(res => Response.json())
    // .then(res => {
    //     if (res.success) {
    //         alert('저장완료')
    //     }
    // })

    // 로그인할때 http통신 이해 필요 access token
    // 실습할때는 로컬스토리지, 세션스토리지 사용

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

    // 메인 이동
    goToMainup() {
        //this.props.history.push('/main');
        if (this.state.btnChangeId && this.state.btnChangePw && this.state.idCheck) {
            this.props.history.push('/main');
        } else {
            alert('로그인 조건에 맞지 않습니다. 다시 확인해주세요')
        } 
    }

    //확인용
    checkUserInfo = () => {
        console.log(this.state)
        //post
        fetch("http://10.58.6.117:8001/users/log-in", {
            method: "POST",
            //로그인후 인증된 회원만 할 수 있는 프라이빗한 활동할때 필요 , 회원가입할때는 headers 없어도됨
            headers: {
                Authorization: localStorage.getItem("access_token") // 예시, 댓글구현할때, 키는 항상 고정
            },
            body: JSON.stringify({
                username: this.state.userInputId, //키는 백엔드에서 요구하는 키값으로 적어야, 벨류는 내가 보낼 정보
                password: this.state.userInputPw
            })
        })
        .then(res => res.json()) //JSON js 로 변환
        // .then(res => console.log(res)) // 콘솔에 정보 나오는지 확인
        .then(res=> localStorage.setItem("access_token", res.token)) //토큰 어플리케이션에 저장할때
        // .then(res => { // 로그인 해본거
        //     if(res) {
        //         this.props.history.push('/main');
        //     }
        // })
        // access_token: res.token
        // 조건걸어서 확인해보기
        this.props.history.push('/main');
    }

    render() {
        // console.log(this.state) 이거로도 확인 가능 state 전체 확인 가능
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
                        //onClick={this.goToMainup.bind(this)} main넘어가는거 일단 지우기
                        onClick={this.checkUserInfo}
                        // onClick 이벤트로  백엔드에 데이터 넘기기 api 요청
                        // post로 할때는 js를 json으로 json은 스트링이므로 stringify씀
                        // main에 연결한거 일단 해제하기
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