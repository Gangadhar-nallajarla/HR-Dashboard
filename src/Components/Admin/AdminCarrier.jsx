import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiPlus, FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AdminJobform from "./AdminJobform";

import "./AdminCarrier.css";

const AdminCarrier = () => {
  const navigate = useNavigate();

  // ---- Job statistics data ----
  const data = [
    { month: "Jan", applied: 40 },
    { month: "Feb", applied: 60 },
    { month: "Mar", applied: 45 },
    { month: "Apr", applied: 80 },
    { month: "May", applied: 55 },
    { month: "Jun", applied: 70 },
    { month: "Jul", applied: 65 },
    { month: "Aug", applied: 90 },
    { month: "Sep", applied: 50 },
    { month: "Oct", applied: 75 },
  ];

  // ---- Job openings ----
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full-time",
      exp: "Fresher",
      salary: "₹4,00,000 - ₹6,00,000",
      location: "Hyderabad",
    },
    {
      id: 2,
      title: "Content Writer",
      type: "Remote",
      exp: "2 yrs Experience",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Bangalore",
    },
  ]);

  const [showJobForm, setShowJobForm] = useState(false);

  // ---- Add new job ----
  const handleAddJob = (jobData) => {
    const newJob = {
      id: Date.now(),
      title: jobData.jobTitle,
      type: jobData.employmentType,
      exp: jobData.experience || "Fresher",
      salary: jobData.salary || "Not Mentioned",
      location: jobData.location,
    };
    setJobs((prev) => [...prev, newJob]);
    setShowJobForm(false);
  };

  return (
    <div className="carrier-page">
      {showJobForm ? (
        <div className="carrier-job-form-wrapper">
          <button
            className="carrier-back-btn"
            onClick={() => setShowJobForm(false)}
          >
            ← Back
          </button>
          <AdminJobform onSubmitJob={handleAddJob} />
        </div>
      ) : (
        <>
          {/* ---- Job Summary ---- */}
          <div className="carrier-summary-cards">
            <motion.div
              className="carrier-summary-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/admin/job-applied")}
            >
              <h4>Job Applied</h4>
              <p>75</p>
              <span>+23%</span>
            </motion.div>

            <motion.div
              className="carrier-summary-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/admin/OnHold")}
            >
              <h4>On Hold</h4>
              <p>7</p>
              <span>0%</span>
            </motion.div>

            <motion.div
              className="carrier-summary-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/admin/Hired")}
            >
              <h4>Hired</h4>
              <p>4</p>
              <span>+9%</span>
            </motion.div>
          </div>

          {/* ---- Job Statistics ---- */}
          <div className="carrier-job-statistics">
            <h3>Job Statistics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <Tooltip />
                <Bar dataKey="applied" fill="#7c3aed" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ---- Current Openings ---- */}
          <div className="carrier-current-openings">
            <div className="carrier-openings-header">
              <h3>Current Openings</h3>
              <button
                className="carrier-post-job-btn"
                onClick={() => setShowJobForm(true)}
              >
                <FiPlus /> Post New Job
              </button>
            </div>

            <div className="carrier-jobs-list">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  className="carrier-job-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4>{job.title}</h4>
                  <div className="carrier-job-info">
                    <p>
                      <FiBriefcase /> {job.type}
                    </p>
                    <p>
                      <FiClock /> {job.exp}
                    </p>
                    <p>💰 {job.salary}</p>
                    <p>
                      <FiMapPin /> {job.location}
                    </p>
                  </div>
                  <div className="carrier-job-actions">
                    <button className="carrier-btn-details">Job Details</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminCarrier;
