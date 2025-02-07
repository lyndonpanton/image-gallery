import { useState } from 'react';
import './css/Header.css';

const Header = () => {
    const [currentView, setCurrentView] = useState(0);
    const view = ["single", "triple", "full"];

    function changeView() {
        setCurrentView((currentView + 1) % view.length);
        console.log(currentView);
    }

    return (
        <header>
            <h1>Image Gallery</h1>
            <button onClick={ changeView } className="button-image-view">
                { 
                    view[currentView][0].toUpperCase()
                    + view[currentView].substring(1)
                }
            </button>
        </header>
    );
};

export default Header;
