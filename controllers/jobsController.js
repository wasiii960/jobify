import Job from '../models/Job.js'
import HttpStatusCode from 'http-status-codes';
import {CustomApiError} from '../errors/index.js';
const createJobs = async (req, res) => {
  const {position,company} = req.body;
  if(!position || !company){
    throw new CustomApiError('Please provide all values',HttpStatusCode.BAD_REQUEST);
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(HttpStatusCode.CREATED).json({job});
};

const showStats = async (req, res) => {
  res.send("show stats");
};
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy:req.user.userId})
  res.status(HttpStatusCode.ACCEPTED).json({jobs,numOfPages:0,totalJobs:jobs.length});
};
const updateJobs = async (req, res) => {
  res.send("update Jobs");
};

export { createJobs, showStats, deleteJob, getAllJobs, updateJobs };
