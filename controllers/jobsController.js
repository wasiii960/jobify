import Job from '../models/Job.js'
import HttpStatusCode from 'http-status-codes';
import {CustomApiError} from '../errors/index.js';
import checkPermission from '../utils/CheckPermission.js';
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
  const {id:jobId} =req.params;
  const job = await Job.findOne({_id:jobId});
  if(!job){
    throw new CustomApiError(`No Job with id ${jobId}`,HttpStatusCode.NOT_FOUND);
  }
  checkPermission(req.user,job.createdBy);
  await Job.findOneAndRemove({_id:jobId});

  res.status(HttpStatusCode.OK).json({msg:'Job removed successfuly'});
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy:req.user.userId})
  res.status(HttpStatusCode.ACCEPTED).json({jobs,numOfPages:0,totalJobs:jobs.length});
};
const updateJobs = async (req, res) => {
  const {id:jobId} =req.params;
  const {position,company} = req.body;
  if(!position || !company ){
    throw new CustomApiError('Please provider all values',HttpStatusCode.BAD_REQUEST);
  }
  const job = await Job.findOne({_id:jobId});
  if(!job){
    throw new CustomApiError(`No Job with id ${jobId}`,HttpStatusCode.NOT_FOUND);
  }
  checkPermission(req.user,job.createdBy);
  const updatedJob = await Job.findOneAndUpdate({_id:jobId},req.body,{
    new:true,
    runValidators:true
  })
  res.status(HttpStatusCode.OK).json(updatedJob);
};

export { createJobs, showStats, deleteJob, getAllJobs, updateJobs };
