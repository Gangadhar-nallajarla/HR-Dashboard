import React, { useState } from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaVenusMars,
  FaHeart,
  FaIdCard,
  FaPhoneAlt,
  FaBuilding,
  FaCalendarAlt,
  FaUserTie,
  FaBriefcase,
  FaEdit,
  FaSave,
} from "react-icons/fa";
import "./AdminEmployees.css";

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    Name: "Likitha",
    DOB: "17/10/2003",
    Email: "likith@email.com",
    Address: "YR Street, Tadepalligudem",
    Gender: "Female",
    "Marital Status": "Married",
    "Spouse Name": "Gita",
    "Aadhar no": "987654578899",
    "PAN no": "Ab2356f",
    Contact: "8524906721",
    "Emergency Contact": "9857223461",
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    "Employee ID": "0124",
    "Phone No": "9848526856",
    Department: "Design",
    Role: "UI/UX Designer",
    "Date of Joining": "08/08/2025",
    Manager: "Vijay",
    "Work Email": "likith@dhatvibs.com",
  });

  const icons = {
    Name: <FaUser />,
    DOB: <FaBirthdayCake />,
    Email: <FaEnvelope />,
    Address: <FaMapMarkerAlt />,
    Gender: <FaVenusMars />,
    "Marital Status": <FaHeart />,
    "Spouse Name": <FaUserTie />,
    "Aadhar no": <FaIdCard />,
    "PAN no": <FaIdCard />,
    Contact: <FaPhoneAlt />,
    "Emergency Contact": <FaPhoneAlt />,
    "Employee ID": <FaIdCard />,
    "Phone No": <FaPhoneAlt />,
    Department: <FaBuilding />,
    Role: <FaBriefcase />,
    "Date of Joining": <FaCalendarAlt />,
    Manager: <FaUserTie />,
    "Work Email": <FaEnvelope />,
  };

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);

  const handleChange = (key, value) => {
    if (activeTab === "personal") {
      setPersonalInfo((prev) => ({ ...prev, [key]: value }));
    } else {
      setProfessionalInfo((prev) => ({ ...prev, [key]: value }));
    }
  };

  const currentInfo =
    activeTab === "personal" ? personalInfo : professionalInfo;

  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* Header */}
        <div className="profile-header">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Profile"
          />
          <div className="profile-details">
            <p><b>Name:</b> Likitha</p>
            <p><b>Employee ID:</b> 0124</p>
            <p><b>Phone No:</b> 9848526856</p>
            <p><b>Email:</b> likith@dhatvibs.com</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabss">
          <button
            className={`tab ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={`tab ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            Professional
          </button>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-header">
            <h3>
              {activeTab === "personal"
                ? "Personal Information"
                : "Professional Information"}
            </h3>
            {!isEditing ? (
              <FaEdit className="edit-icon" onClick={handleEditClick} />
            ) : (
              <FaSave className="edit-icon" onClick={handleSaveClick} />
            )}
          </div>

          <div className="info-content">
            {Object.entries(currentInfo).map(([key, value]) => (
              <div key={key} className="info-row">
                <div className="info-label">
                  {icons[key]} <b>{key} :</b>
                </div>
                <div className="info-value">
                  {isEditing ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleChange(key, e.target.value)
                      }
                    />
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="button-row">
          <button className="btn-primary">Payroll</button>
          <button className="btn-primary">Leaves</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
