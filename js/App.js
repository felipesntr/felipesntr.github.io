/*
const projects_element = document.querySelector(".projects--container");

const repos = () => {
  const url = `https://api.github.com/users/felipesntr/repos`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", () => {
  const repositories = repos();
  repositories.then((data) =>
    data.filter((repository) => {
      const project = new Project(
        repository.name,
        repository.description,
        repository.html_url,
        repository.language
      );
      const project_card = new ProjectCard(project);
      const project_element = project_card.create();
      projects_element.appendChild(project_element);
    })
  );
});
*/
