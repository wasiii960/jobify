import express from "express";
import {
  createJobs,
  showStats,
  deleteJob,
  getAllJobs,
  updateJobs,
} from "../controllers/jobsController.js";
const router = express.Router();

router.route("/").post(createJobs).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJobs);

export default router;
