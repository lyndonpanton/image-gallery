import './css/ExternalLink.css'

const Technology = () => {
    const url = {
        react: "https://react.dev/",
        vite: "https://vite.dev/",
        fontawesome: "https://fontawesome.com/"
    };
    
    return (
        <div id="technology" className="external-icons">
            <a className="external-icon technology-icon technology-icon-react" href={ url.react } target="_blank">
                <i className="fa-brands fa-react"></i>
            </a>
            <a className="external-icon technology-icon technology-icon-vite" href={ url.vite } target="_blank">
                <i className="fa-solid fa-bolt-lightning"></i>
            </a>
            <a className="external-icon technology-icon technology-icon-fontawesome" href={url.fontawesome } target="_blank">
                <i className="fa-solid fa-font-awesome"></i>
            </a>
        </div>
    );
};

export default Technology;
