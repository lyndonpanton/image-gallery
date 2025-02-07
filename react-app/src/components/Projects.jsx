import './css/ExternalLink.css'

const Projects = () => {
    const url = {
        counter: "https://github.com/lyndonpanton/Counter",
        todoList: "./",
        wordCounter: "./"
    }
    return (
        <div id="projects" className="external-icons">
            <a className="project-link" href={ url.counter } target="_blank">Counter</a>
            <a className="project-link" href={ url.todoList } target="_blank">Todo List</a>
            <a className="project-link" href={ url.wordCounter } target="_blank">Word Counter</a>
        </div>
    );
};

export default Projects;
