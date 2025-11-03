import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiClock,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notifications] = useState([
    { title: "Approvals", icon: "✅", items: ["2 leave approvals pending"] },
    { title: "Requests", icon: "📩", items: ["3 support requests pending"] },
  ]);

  const [pending] = useState([
    { id: "approvals", label: "Approvals" },
    { id: "requests", label: "Requests" },
    { id: "payroll", label: "Payroll" },
    { id: "timesheet", label: "Time Sheet" },
  ]);

  const [stats, setStats] = useState({
    totalEmployees: 50,
    jobApplied: 77,
    leaveRequests: 88,
    tasks: ["Oct 25 — Client Review", "Oct 28 — Project Deadline"],
  });

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const monthlyAttendance = useMemo(() => {
    const baseData = [
      { present: 85, absent: 15 },
      { present: 75, absent: 25 },
      { present: 90, absent: 10 },
      { present: 80, absent: 20 },
      { present: 70, absent: 30 },
      { present: 82, absent: 18 },
      { present: 88, absent: 12 },
      { present: 92, absent: 8 },
      { present: 85, absent: 15 },
      { present: 77, absent: 23 },
      { present: 81, absent: 19 },
      { present: 89, absent: 11 },
    ];
    return baseData;
  }, []);

  const pieData = [
    { name: "Present", value: monthlyAttendance[selectedMonth].present },
    { name: "Absent", value: monthlyAttendance[selectedMonth].absent },
  ];

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--bg", "#1f2937");
      root.style.setProperty("--card", "#374151");
      root.style.setProperty("--text", "#f9fafb");
      root.style.setProperty("--muted", "#9ca3af");
      root.style.setProperty("--accent", "#7c3aed");
    } else {
      root.style.setProperty("--bg", "#f8fafc");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--text", "#111827");
      root.style.setProperty("--muted", "#6b7280");
      root.style.setProperty("--accent", "#7c3aed");
    }
  }, [darkMode]);

  return (
    <div className="dashboard-wrap">
      {/* Header */}
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <h2>Company Dashboard</h2>
          <div className="search">
            <FiSearch />
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <button className="mode-toggle" onClick={() => setDarkMode((d) => !d)}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      {/* Stats */}
      <section className="stats-grid">
        <div className="card">
          <div className="small">Total Employees</div>
          <div className="big">{stats.totalEmployees}</div>
        </div>
        <div className="card">
          <div className="small">Job Applied</div>
          <div className="big">{stats.jobApplied}</div>
        </div>
        <div className="card">
          <div className="small">Leave Requests</div>
          <div className="big">{stats.leaveRequests}</div>
        </div>
        <div className="card">
          <div className="small">Upcoming Tasks</div>
          <ol>
            {stats.tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pending Actions */}
      <div className="card pending">
        <div className="pending-header">
          <div className="title">Pending Actions</div>
          <div className="notification-section" style={{ position: "relative" }}>
            <div
              className="notification-icon"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FiBell />
              <span className="badge">{notifications.length}</span>
            </div>
            {showNotifications && (
              <div className="notification-dropdown">
                {notifications.map((group, idx) => (
                  <div key={idx} className="notif-group">
                    <h4>
                      {group.icon} {group.title}
                    </h4>
                    <ul>
                      {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {pending.map((p) => (
          <div
            key={p.id}
            className="btn"
            onClick={() => {
              if (p.id === "approvals") navigate("/approvals");
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FiClock />
              <div>
                <div style={{ fontWeight: 600 }}>{p.label}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Review</div>
              </div>
            </div>
            <FiChevronDown />
          </div>
        ))}
      </div>

      {/* Attendance Chart */}
      <div className="widget">
        <h4>Monthly Attendance — {monthNames[selectedMonth]}</h4>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={75}>
              {pieData.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={entry.name === "Present" ? "#10b981" : "#7c3aed"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
