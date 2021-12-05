class Project {
    constructor(name, description, link) {
        this.name = name;
        this.description = description;
        this.link = link;
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
            <div class="card">
                <h1>
                    <a href="${this.project.link}" target="_blank" class="project-card">
                        ${this.project.name}
                    </a>
                </h1>
                <div class="card-content">
                    <span class="card-title">${this.project.name}</span>
                    <p>${this.project.description}</p>
                </div>
            </div>
        </a>
        `;
        return card;
    }
}