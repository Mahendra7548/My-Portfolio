const Project = require("../Models/Project");

// get all projects
exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// add new project
exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
};
