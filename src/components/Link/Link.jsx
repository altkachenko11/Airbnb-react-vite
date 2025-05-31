import styles from './style.module.scss';

const Link = ({ text, style, icon }) => {
    return (
        <a href="#" 
        className={styles.link}>
             {icon && <img src={icon} alt="" className="link__icon" />}
            {text}
        </a>
    );
};

export default Link;
