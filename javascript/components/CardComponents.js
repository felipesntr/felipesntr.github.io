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

        card.innerHTML = `
            <div class="project-card">
                <h1>
                    <a href="${this.project.link}" target="_blank" class="project-title">
                        ${this.project.name}
                    </a>
                </h1>
                <div class="project-content">
                    <p>${this.project.description ? this.project.description : ""}</p>
                </div>
                <div class="project-language">
                    ${this.project.language}
                </div>
            </div>
        `;
        return card;
    }
}