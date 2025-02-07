import './css/ExternalLink.css'

const Social = () => {
    const url = {
        github: "https://github.com/lyndonpanton"
    };

    return (
        <div id="social" className="social-icons">
            <a className="external-icon social-icon social-icon-github" href={ url.github } target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    );
};

export default Social;
