import './css/Footer.css'
import Technology from './Technology';
import Social from './Social';
import Projects from './Projects';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer>
            <Social />
            <Technology />
            <Projects />
            <p>&copy; { year } | Lyndon Mykal Panton | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
