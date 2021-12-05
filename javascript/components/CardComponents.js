class Project {
    constructor(name, description, link, language) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.language = language;
    }
}

class ProjectCard {
    constructor(project) {
        this.project = project;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('project-card');

        const project_title = document.createElement('h3');
        project_title.classList.add('project-card--title');

        const project_title_a = document.createElement('a');
        project_title_a.href = this.project.link;
        project_title_a.innerText = this.project.name;

        project_title.appendChild(project_title_a);

        const project_description = document.createElement('p');
        project_description.classList.add('project-card--description');
        project_description.textContent = this.project.description;

        const project_language = document.createElement('p');
        project_language.classList.add('project-card--language');
        project_language.textContent = this.project.language;

        card.appendChild(project_title);
        card.appendChild(project_description);
        card.appendChild(project_language);

        return card;
    }
}