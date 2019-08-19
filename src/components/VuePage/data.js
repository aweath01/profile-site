const teamURL = "https://enigmatic-bastion-70371.herokuapp.com/teams-raw";
const employeeURL = "https://enigmatic-bastion-70371.herokuapp.com/employees";
const projectsURL = "https://enigmatic-bastion-70371.herokuapp.com/projects";

export function getTeamData() {
  return fetch(teamURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(teams => {
      teams.forEach(team => {
        team.TeamName = parseInt(team.TeamName.replace("Team ", ""));
      });
      teams.sort((a, b) => a.TeamName - b.TeamName);

      return teams;
    })
    .then(teams => {
      return teams;
    });
}

export function getEmployeeData() {
  return fetch(employeeURL).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function getProjectsData() {
  return fetch(projectsURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(projects => {
      projects.forEach(project => {
        project.ProjectName = parseInt(
          project.ProjectName.replace("Project ", "")
        );
      });
      projects.sort((a, b) => a.ProjectName - b.ProjectName);
      projects.forEach(project => {
        project.ProjectName = "Project " + project.ProjectName;
      });

      return projects;
    })
    .then(projects => {
      return projects;
    });
}