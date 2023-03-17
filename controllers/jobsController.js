const createJobs = async (req, res) => {
  res.send("create jobs");
};

const showStats = async (req, res) => {
  res.send("show stats");
};
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};

const getAllJobs = async (req, res) => {
  res.send("get all hobs");
};
const updateJobs = async (req, res) => {
  res.send("update Jobs");
};

export { createJobs, showStats, deleteJob, getAllJobs, updateJobs };
