import { useState } from 'react'
import './css/MainContent.css'
import Gallery from './Gallery';

const MainContent = () => {
    const [currentView, setCurrentView] = useState(0);
    const view = ["single", "triple", "full"];

    function changeView() {
        setCurrentView((currentView + 1) % view.length);
    }

    return (
        <main>
            <Gallery viewIndex = { currentView } viewOptions = { view }/>
            <button onClick={ changeView } className="button-image-view">
                { 
                    view[currentView][0].toUpperCase()
                    + view[currentView].substring(1)
                }
            </button>
        </main>
    );
};

export default MainContent;
