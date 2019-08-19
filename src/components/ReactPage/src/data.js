import moment from 'moment';

const teamURL = "https://enigmatic-bastion-70371.herokuapp.com/teams";
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
      teams.forEach(team => {
        team.TeamName = "Team " + team.TeamName;
      });
      teams.forEach(team => {
        team.NumEmps = team.Employees.length;
      });
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
  })
    .then(employees => {
        employees.forEach(employee =>{        
            var temp = new Date(employee.HireDate);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            employee.HireDate = temp.toLocaleDateString('default', options);
        })
        return employees;    
    })
    .then(employees => {return employees;});
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

      projects.forEach(project =>{
        var dt = new Date(project.ProjectStartDate);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        project.ProjectStartDate = dt.toLocaleDateString('default', options);
        
        var cur = moment();
        var start = moment(project.ProjectStartDate);
        var diff = cur.diff(start, 'days');
        project.days = diff;
      })

      return projects;
    })
    .then(projects => {
      return projects;
    });
}
