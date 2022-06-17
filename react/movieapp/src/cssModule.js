/* 
    npm i prop-types 
    위 명령어를 통해 proptype을 설치할 수 있다.
*/
import PropTypes from "prop-types";
/* 
    css를 모듈화하기 위해선 css명.module.css라고 파일명을 정의한다.

    import 원하는이름 from css경로;
    위와 같이 import한다.
    그리고 컴포넌트 내 요소에 className={원하는이름.클래스명}을 입력한다.
    import할 때 설정한 원하는 이름은 동일하게 주어야하며, 클래스명은
    해당 css 파일 내 설정한 클래스명을 주어야한다.

    이렇게 모듈화해서 css를 설정하는 이유는 클래스를 주고 싶은 요소만 주기 위해서이다.
    일반 css를 import하면 모든 컴포넌트의 요소들에게 css설정이 되기 때문이다.
*/
import button from "./Button.module.css";

function Button({text}){
    // button 요소는 Button.module.css 내부의 .btn css설정을 주었다.
    return <button className={button.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;