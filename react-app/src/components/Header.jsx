import './css/Header.css';

const Header = () => {
    const view = ["single", "triple", "full"];
    let currentView = 0;

    return (
        <header>
            <h1>Image Gallery</h1>
            <button className="button-image-view">
                { 
                    view[currentView][0].toUpperCase()
                    + view[currentView].substring(1)
                }
            </button>
        </header>
    );
};

export default Header;
