import PropTypes from "prop-types";
import styles from "./App.module.css";
// npm i prop-types

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;