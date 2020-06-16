import React from "react";
import './Main.scss';
import LogoText from '../../Images/logo_text.png';

class MainNav extends React.Component {
    render() {
        return (
            <nav>
                <section className="nav-section">
                    <div className="nav-logo">
                        <img className="nav-img-logo" alt="img instar logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                        <img className="nav-text-logo" alt="text instar logo" src={LogoText}/>
                    </div>
                    <div className="nav-serch-input">
                        <img className="input-img" alt="img-input" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
                        <input className="input-text" type="text" placeholder="검색"/>
                    </div>
                    <div className="nav-icon">
                        <img className="nav-icon-img" alt="img compass" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                        <img className="nav-icon-img" alt="img heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className="nav-icon-img" alt="img myinfo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                    </div>
                </section>
            </nav>
        );
    }
}

class MainSubject extends React.Component {
    constructor() {
        super();

        this.state = {
            inputComment: "",
            inputCommentUp: []
        }
        //this.handleChangeInput = this.handleChangeInput.bind(this);
        //this.clickCommentBtn = this.clickCommentBtn.bind(this);
    }

    handleChangeInput = (e) => {
        this.setState({inputComment: e.target.value});
    }

    handleClickBtn = (e) => {
        // react에서 push 쓰는 법
        // react에서 state 내부의 값을 직접적으로 수정하면 안된다 
        // push, splice, unshift, pop은 배열 자체를 직접적으로 수정하므로 적합x
        // 기존 배열에 기반하여 새 배열을 만들어내는 concat, slice, map, filter 함수 사용
        // let inputArr = this.state.inputCommentUp;
        // let inputWord = this.state.inputComment;
        // inputArr.push(inputWord)
        // this.setState({inputCommentUp: inputArr})
        
        this.setState({
            inputCommentUp: this.state.inputCommentUp.concat(this.state.inputComment)
        })
    }

    handleKeyPressInput = (e) => {
        console.log("handleKeyPressInput >>> ", e.key)
        if (e.key === 'Enter') {
            this.handleClickBtn();
        }
    }

    render() {
        console.log("this.state.inputCommentUp >>>", this.state.inputCommentUp)
        return (
            <main>
                <section className="main-section">
                    <div className="feeds">
                        <article>
                            <div className="arti-top">
                                <img className="a-t-profile" alt="img-profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/16230790_1853381044934035_7318178725361614848_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=1anxp3iBX6oAX9Kw_Tz&amp;oh=fc8faba41987174fb739503f740780dd&amp;oe=5F03C505"/>
                                <a className="link a-t-follow" href="https://www.instagram.com/matthewjam/?hl=ko">matthewjam</a>
                                <img className="a-t-info" alt="img-three-dot" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
                            </div>
                            <div className="arti-mid">
                                <img className="a-m-img" alt="피드 이미지" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/101106610_182127813122929_3391656150019650336_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=101&amp;_nc_ohc=-QRzoyvy4a8AX_bWDcQ&amp;oh=4184a98c24be83156352750513077337&amp;oe=5F0071DB"/>
                            </div>
                            <div className="arti-bottom-1">
                                <img className="a-b-icon heart" alt="icon-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                                <img className="a-b-icon comment" alt="icon-comment" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                <img className="a-b-icon share" alt="icon-share" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                                <img className="a-b-icon bookmark" alt="icon-bookmark" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                            </div>
                            <div className="arti-bottom-2">
                                <img className="a-b-like-profile" alt="좋아요 프로필" src="https://instagram.fbbi3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbbi3-1.fna.fbcdn.net&_nc_ohc=8_uE6AH0S60AX93BnL-&oh=17904fa6cdc07f3ae435a258e77bdc4d&oe=5F03DA8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"/>
                                <div className="a-b-like-text">
                                <a className="link like-instar" href="https://www.instagram.com/jasmine__jsk/?hl=ko">jasmine__jsk</a>
                                <span className="a-b-like-span">님</span>
                                <a className="link like-page" href="true">외 3명</a>
                                <span className="a-b-like-span">이 좋아합니다</span>
                                </div>
                            </div>
                            <div className="arti-comment">
                                <div className="a-t-c-form">
                                    <a className="link a-t-c-userid" href="true">yunesday</a>
                                    <span className="a-t-c-content">ㅋㅋㅋㅋㅋ너무해ㅠㅠ</span>
                                </div>
                                <div className="a-t-c-form">
                                    <a className="link a-t-c-userid" href="true">ajk_3469</a>
                                    <span className="a-t-c-content">???</span>
                                </div>
                                {this.state.inputCommentUp.map((inputComment,idx) => {
                                    return (
                                        <div className="a-t-c-form" key={idx}>
                                            <a className="link a-t-c-userid" href="true">unknown user</a>
                                            <span className="a-t-c-content">{inputComment}</span>
                                            <button className="a-t-c-comment-del">삭제</button>
                                        </div>
                                        )
                                })}
                            </div>
                            <div className="arti-comment-time">
                                <time className="a-t-c-timing">4일 전</time>
                            </div>
                            <div className="arti-comment-input">
                                <div className="a-c-i-form">
                                    <input 
                                        className="a-c-i-addtext" 
                                        type="text" 
                                        placeholder="댓글 달기..."
                                        onChange={this.handleChangeInput}
                                        onKeyPress={this.handleKeyPressInput}
                                    />
                                    <button 
                                        type="button" 
                                        className="a-c-i-button"
                                        onClick={this.handleClickBtn}
                                    >
                                        게시
                                    </button>
                                </div>
                            </div> 
                        </article>
                    </div>
                    <div className="main-right">
                        <div className="mr-instar-info">
                            <div className="mr-i-i-imginfo"> 
                                <img className="mr-i-i-myprofile" alt="내 프로필" src="https://instagram.fupg2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fupg2-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=8_uE6AH0S60AX-Xv8wz&amp;oh=0d13143b682d5d4afeb6f57a8fabfcec&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"/>
                            </div>
                            <div className="mr-i-i-textinfo">
                                <a className="link mr-i-i-tl" href="https://www.instagram.com/jasmine__jsk/">jasmine__jsk</a>
                                <span className="mr-i-i-ts">언젠가는 되겠지...</span>
                            </div>
                        </div>
                        <div className="mr mr-story">
                            <div className="mr-top">
                                <div className="mr-top-left">스토리</div>
                                <a className="link mr-top-right" href="true">모두보기</a> 
                            </div>
                            <div className="mr-story-line">
                                <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11259380_355578351305074_1494114058_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=zTGynKyNHncAX953fbX&amp;oh=f151b80c3c005c98094598d109fb31a6&amp;oe=5F04CD34"/>
                                <div className="m-s-l-linktime">
                                    <a className="link m-s-l-link" href="true">zacefron</a>
                                    <time className="m-s-l-time">4분 전</time>
                                </div>
                            </div>
                            <div className="mr-story-line">
                                <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101703932_264332984810770_2870985139712688128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=zkG6ymrrcFMAX8OkpiW&amp;oh=c8403cd330f5c8d9a761712cb513c523&amp;oe=5F0505FD"/>
                                <div className="m-s-l-linktime">
                                    <a className="link m-s-l-link" href="true">instagram</a>
                                    <time className="m-s-l-time">30분 전</time>
                                </div>
                            </div>
                            <div className="mr-story-line">
                                <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/95689832_3250298895194727_4685303179515002880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=gMSu707SH6MAX_Xjgip&amp;oh=9e4a0c74cb7880247e95b20c05da003f&amp;oe=5F03ACFE"/>
                                <div className="m-s-l-linktime">
                                    <a className="link m-s-l-link" href="true">mercedesbenz_de</a>
                                    <time className="m-s-l-time">1시간 전</time>
                                </div>
                            </div>
                            <div className="mr-story-line">
                                <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92346759_3432646253417743_7236500683753521152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=YJ4z8xj9XHIAX9VfADk&amp;oh=be337c5732fd90645f6ab8f5ff3fb0d7&amp;oe=5F045686"/>
                                <div className="m-s-l-linktime">
                                    <a className="link m-s-l-link" href="true">jlo</a>
                                    <time className="m-s-l-time">15시간 전</time>
                                </div>
                            </div>
                            <div className="mr-story-line">
                                <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71035156_1437982729689543_3632795403243487232_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=TjenkrcRuIAAX_hGxFB&amp;oh=e997c708dc13f607a5fcd39c7b4daad8&amp;oe=5F03A3FF"/>
                                <div className="m-s-l-linktime">
                                    <a className="link m-s-l-link" href="true">thiago6 </a>
                                    <time className="m-s-l-time">20시간 전</time>
                                </div>
                            </div>
                        </div>
                        <div className="mr mr-recommend">
                            <div className="mr-top">
                                <div className="mr-top-left">회원님을 위한 추천</div>
                                <a className="link mr-top-right" href="true">모두보기</a> 
                            </div>
                            <div className="mr-recommend-line">
                                <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83249879_599309397346577_8583207556522967040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=fRl3B-GKnW0AX_XzDXm&amp;oh=226cd7d3bb063cc8583cb4c02ac339b9&amp;oe=5F033411"/>
                                <div className="m-r-l-linkfollow">
                                    <a className="link m-r-l-link" href="true">taylorswift</a>
                                    <span className="follow-people">thiago6님 외 199명이 좋아합니다</span>
                                </div>
                                <div className="m-r-l-button">
                                    <button className="m-r-l-btnfollow">팔로우</button>
                                </div>
                            </div>
                            <div className="mr-recommend-line">
                                <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/96529870_558706811690253_8857266954369499136_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=bmeQgPNBSSIAX8RCm2x&amp;oh=a03a79743022988fdc3d028494fa920e&amp;oe=5F05134A"/>
                                <div className="m-r-l-linkfollow">
                                    <a className="link m-r-l-link" href="true">nikkietutorials</a>
                                    <span className="follow-people">christian_fig님 외 1,089명이 좋아합니다</span>
                                </div>
                                <div className="m-r-l-button">
                                    <button className="m-r-l-btnfollow">팔로우</button>
                                </div>
                            </div>
                            <div className="mr-recommend-line">
                                <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101436482_273230760719318_4339235927646797824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=FMNDiyfpygMAX-tda-n&amp;oh=649381e2bf82379fe0a4bf22f99a7667&amp;oe=5F024BC1"/>
                                <div className="m-r-l-linkfollow">
                                    <a className="link m-r-l-link" href="true">lelepons</a>
                                    <span className="follow-people">alessandraambrosio님 외 10명이 좋아합니다</span>
                                </div>
                                <div className="m-r-l-button">
                                    <button className="m-r-l-btnfollow">팔로우</button>
                                </div>
                            </div>
                            <div className="mr-recommend-line">
                                <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/90204813_521199672163123_6548735888333996032_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=6yhkoAEEr40AX90INal&amp;oh=ed2b5e50a7ac6b3431eddc5db5759f98&amp;oe=5F020AEF"/>
                                <div className="m-r-l-linkfollow">
                                    <a className="link m-r-l-link" href="true">worldstar</a>
                                    <span className="follow-people">ayutingting92님 외 104명이 좋아합니다</span>
                                </div>
                                <div className="m-r-l-button">
                                    <button className="m-r-l-btnfollow">팔로우</button>
                                </div>
                            </div>
                            <div className="mr-recommend-line">
                                <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67079378_2554958311398016_3446247243953209344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=FjlEd4c5puwAX_1pIvq&amp;oh=56ae207ad3310ec829b3411033725023&amp;oe=5F02398B"/>
                                <div className="m-r-l-linkfollow">
                                    <a className="link m-r-l-link" href="true">workinghard</a>
                                    <span className="follow-people">gogogo님 외 199명이 좋아합니다</span>
                                </div>
                                <div className="m-r-l-button">
                                    <button className="m-r-l-btnfollow">팔로우</button>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <ul className="footer-ul">
                                <li className="footer-li">Instargram 정보</li>
                                <li className="footer-li">지원</li>
                                <li className="footer-li">홍보 센터</li>
                                <li className="footer-li">API</li>
                                <li className="footer-li">채용 정보</li>
                                <li className="footer-li">개인정보처리방침</li>
                                <li className="footer-li">약관</li>
                                <li className="footer-li">디렉터리</li>
                                <li className="footer-li">프로필</li>
                                <li className="footer-li">해시태그</li>
                                <li className="footer-li">언어</li>
                            </ul>
                            <span className="footer-span">© 2020 INSTAGRAM</span>
                        </footer>
                    </div>
                </section>
            </main>
        );
    }
}

class MainJs extends React.Component {
    render() {
        return (
            <>
                <MainNav />,
                <MainSubject />
            </>
        )
    }
}

export default MainJs;

/*
export class MainJs extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <section className="nav-section">
                        <div className="nav-logo">
                            <img className="img-logo" alt="img instar logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                            <img className="text-logo" alt="text instar logo" src={LogoText}/>
                        </div>
                        <div className="nav-serch-input">
                            <img className="input-img" alt="img-input" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
                            <input className="input-text" type="text" placeholder="검색"/>
                        </div>
                        <div className="nav-icon">
                            <img className="nav-icon-img" alt="img compass" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                            <img className="nav-icon-img" alt="img heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                            <img className="nav-icon-img" alt="img myinfo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                        </div>
                    </section>
                </nav>
                <main>
                    <section className="main-section">
                        <div className="feeds">
                            <article>
                                <div className="arti-top">
                                    <img className="a-t-profile" alt="img-profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/16230790_1853381044934035_7318178725361614848_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=1anxp3iBX6oAX9Kw_Tz&amp;oh=fc8faba41987174fb739503f740780dd&amp;oe=5F03C505"/>
                                    <a className="link a-t-follow" href="https://www.instagram.com/matthewjam/?hl=ko">matthewjam</a>
                                    <img className="a-t-info" alt="img-three-dot" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
                                </div>
                                <div className="arti-mid">
                                    <img className="a-m-img" alt="피드 이미지" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/101106610_182127813122929_3391656150019650336_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=101&amp;_nc_ohc=-QRzoyvy4a8AX_bWDcQ&amp;oh=4184a98c24be83156352750513077337&amp;oe=5F0071DB"/>
                                </div>
                                <div className="arti-bottom-1">
                                    <img className="a-b-icon heart" alt="icon-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                                    <img className="a-b-icon comment" alt="icon-comment" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                    <img className="a-b-icon share" alt="icon-share" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                                    <img className="a-b-icon bookmark" alt="icon-bookmark" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                                </div>
                                <div className="arti-bottom-2">
                                    <img className="a-b-like-profile" alt="좋아요 프로필" src="https://instagram.fbbi3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbbi3-1.fna.fbcdn.net&_nc_ohc=8_uE6AH0S60AX93BnL-&oh=17904fa6cdc07f3ae435a258e77bdc4d&oe=5F03DA8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"/>
                                    <div className="a-b-like-text">
                                    <a className="link like-instar" href="https://www.instagram.com/jasmine__jsk/?hl=ko">jasmine__jsk</a>
                                    <span className="a-b-like-span">님</span>
                                    <a className="link like-page" href>외 3명</a>
                                    <span className="a-b-like-span">이 좋아합니다</span>
                                    </div>
                                </div>
                                <div className="arti-comment">
                                    <div className="a-t-c-form">
                                        <a className="link a-t-c-userid" href>yunesday</a>
                                        <span className="a-t-c-content">ㅋㅋㅋㅋㅋ너무해ㅠㅠ</span>
                                    </div>
                                    <div className="a-t-c-form">
                                        <a className="link a-t-c-userid" href>ajk_3469</a>
                                        <span className="a-t-c-content">???</span>
                                    </div>
                                </div>
                                <div className="arti-comment-time">
                                    <time className="a-t-c-timing">4일 전</time>
                                </div>
                                <div className="arti-comment-input">
                                    <form className="a-c-i-form">
                                        <input type="text" style={{display: `none`}}/>
                                        <input className="a-c-i-addtext" type="text" placeholder="댓글 달기..."/>
                                        <button type="button" className="a-c-i-button">게시</button>
                                    </form>
                                </div>
                            </article>
                            </div>
                            <div className="main-right">
                                <div className="mr-instar-info">
                                    <div className="mr-i-i-imginfo"> 
                                    <img className="mr-i-i-myprofile" alt="내 프로필" src="https://instagram.fupg2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fupg2-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=8_uE6AH0S60AX-Xv8wz&amp;oh=0d13143b682d5d4afeb6f57a8fabfcec&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"/>
                                </div>
                                <div className="mr-i-i-textinfo">
                                    <a className="link mr-i-i-tl" href="https://www.instagram.com/jasmine__jsk/">jasmine__jsk</a>
                                    <span className="mr-i-i-ts">언젠가는 되겠지...</span>
                                </div>
                            </div>
                            <div className="mr mr-story">
                                <div className="mr-top">
                                    <div className="mr-top-left">스토리</div>
                                    <a className="link mr-top-right" href>모두보기</a> 
                                </div>
                                <div className="mr-story-line">
                                    <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11259380_355578351305074_1494114058_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=zTGynKyNHncAX953fbX&amp;oh=f151b80c3c005c98094598d109fb31a6&amp;oe=5F04CD34"/>
                                    <div className="m-s-l-linktime">
                                        <a className="link m-s-l-link" href>zacefron</a>
                                        <time className="m-s-l-time">4분 전</time>
                                    </div>
                                </div>
                                <div className="mr-story-line">
                                    <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101703932_264332984810770_2870985139712688128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=zkG6ymrrcFMAX8OkpiW&amp;oh=c8403cd330f5c8d9a761712cb513c523&amp;oe=5F0505FD"/>
                                    <div className="m-s-l-linktime">
                                        <a className="link m-s-l-link" href>instagram</a>
                                        <time className="m-s-l-time">30분 전</time>
                                    </div>
                                </div>
                                <div className="mr-story-line">
                                    <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/95689832_3250298895194727_4685303179515002880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=gMSu707SH6MAX_Xjgip&amp;oh=9e4a0c74cb7880247e95b20c05da003f&amp;oe=5F03ACFE"/>
                                    <div className="m-s-l-linktime">
                                        <a className="link m-s-l-link" href>mercedesbenz_de</a>
                                        <time className="m-s-l-time">1시간 전</time>
                                    </div>
                                </div>
                                <div className="mr-story-line">
                                    <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92346759_3432646253417743_7236500683753521152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=YJ4z8xj9XHIAX9VfADk&amp;oh=be337c5732fd90645f6ab8f5ff3fb0d7&amp;oe=5F045686"/>
                                    <div className="m-s-l-linktime">
                                        <a className="link m-s-l-link" href>jlo</a>
                                        <time className="m-s-l-time">15시간 전</time>
                                    </div>
                                </div>
                                <div className="mr-story-line">
                                    <img className="m-s-l-img" alt="스토리 업데이트" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71035156_1437982729689543_3632795403243487232_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=TjenkrcRuIAAX_hGxFB&amp;oh=e997c708dc13f607a5fcd39c7b4daad8&amp;oe=5F03A3FF"/>
                                    <div className="m-s-l-linktime">
                                        <a className="link m-s-l-link" href>thiago6 </a>
                                        <time className="m-s-l-time">20시간 전</time>
                                    </div>
                                </div>
                            </div>
                            <div className="mr mr-recommend">
                                <div className="mr-top">
                                    <div className="mr-top-left">회원님을 위한 추천</div>
                                    <a className="link mr-top-right" href>모두보기</a> 
                                    </div>
                                <div className="mr-recommend-line">
                                    <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83249879_599309397346577_8583207556522967040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=fRl3B-GKnW0AX_XzDXm&amp;oh=226cd7d3bb063cc8583cb4c02ac339b9&amp;oe=5F033411"/>
                                    <div className="m-r-l-linkfollow">
                                        <a className="link m-r-l-link" href>taylorswift</a>
                                        <span className="follow-people">thiago6님 외 199명이 좋아합니다</span>
                                    </div>
                                    <div className="m-r-l-button">
                                        <button className="m-r-l-btnfollow">팔로우</button>
                                    </div>
                                </div>
                                <div className="mr-recommend-line">
                                    <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/96529870_558706811690253_8857266954369499136_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=bmeQgPNBSSIAX8RCm2x&amp;oh=a03a79743022988fdc3d028494fa920e&amp;oe=5F05134A"/>
                                    <div className="m-r-l-linkfollow">
                                        <a className="link m-r-l-link" href>nikkietutorials</a>
                                        <span className="follow-people">christian_fig님 외 1,089명이 좋아합니다</span>
                                    </div>
                                    <div className="m-r-l-button">
                                        <button className="m-r-l-btnfollow">팔로우</button>
                                    </div>
                                </div>
                                <div className="mr-recommend-line">
                                    <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/101436482_273230760719318_4339235927646797824_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=FMNDiyfpygMAX-tda-n&amp;oh=649381e2bf82379fe0a4bf22f99a7667&amp;oe=5F024BC1"/>
                                    <div className="m-r-l-linkfollow">
                                        <a className="link m-r-l-link" href>lelepons</a>
                                        <span className="follow-people">alessandraambrosio님 외 10명이 좋아합니다</span>
                                    </div>
                                    <div className="m-r-l-button">
                                        <button className="m-r-l-btnfollow">팔로우</button>
                                    </div>
                                </div>
                                <div className="mr-recommend-line">
                                    <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/90204813_521199672163123_6548735888333996032_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=6yhkoAEEr40AX90INal&amp;oh=ed2b5e50a7ac6b3431eddc5db5759f98&amp;oe=5F020AEF"/>
                                    <div className="m-r-l-linkfollow">
                                        <a className="link m-r-l-link" href>worldstar</a>
                                        <span className="follow-people">ayutingting92님 외 104명이 좋아합니다</span>
                                    </div>
                                    <div className="m-r-l-button">
                                        <button className="m-r-l-btnfollow">팔로우</button>
                                    </div>
                                </div>
                                <div className="mr-recommend-line">
                                    <img className="m-r-l-img" alt="인스타 추천" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67079378_2554958311398016_3446247243953209344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=FjlEd4c5puwAX_1pIvq&amp;oh=56ae207ad3310ec829b3411033725023&amp;oe=5F02398B"/>
                                    <div className="m-r-l-linkfollow">
                                        <a className="link m-r-l-link" href>workinghard</a>
                                        <span className="follow-people">gogogo님 외 199명이 좋아합니다</span>
                                    </div>
                                    <div className="m-r-l-button">
                                        <button className="m-r-l-btnfollow">팔로우</button>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <ul className="footer-ul">
                                    <li className="footer-li">Instargram 정보</li>
                                    <li className="footer-li">지원</li>
                                    <li className="footer-li">홍보 센터</li>
                                    <li className="footer-li">API</li>
                                    <li className="footer-li">채용 정보</li>
                                    <li className="footer-li">개인정보처리방침</li>
                                    <li className="footer-li">약관</li>
                                    <li className="footer-li">디렉터리</li>
                                    <li className="footer-li">프로필</li>
                                    <li className="footer-li">해시태그</li>
                                    <li className="footer-li">언어</li>
                                </ul>
                                <span className="footer-span">© 2020 INSTAGRAM</span>
                            </footer>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default MainJs;
*/
