import React from "react";
import "./index.css";
import data from "./data";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import "./App.css";
import TimelineIcon from "@material-ui/icons/Timeline";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PieChartIcon from "@material-ui/icons/PieChart";
import BarChartIcon from "@material-ui/icons/BarChart";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
const Navbar = () => {
  return (
    <>
      <div className="heading_style">
        <span className="borderstyle1">
          <SettingsRoundedIcon />
        </span>
        <span className="borderstyle2">
          <NotificationsNoneRoundedIcon />
        </span>
      </div>
      <div className="sidebar fixed">
        <div className="logoName">
          <NavLink className="decor" to="/">
            <span className="mr">
              <img src="/images/blue.png" />
            </span>
            Finacular
            <span className="ml">
              <ChevronLeftIcon />
            </span>
          </NavLink>
        </div>
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <NavLink
            style={{ backgroundColor: "#01038a" }}
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            to="/"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <span className="mr">
              <DashboardIcon />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            style={{ color: "#01038a" }}
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            to="/assets"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <span className="mr">
              <PieChartIcon />
            </span>
            Assets
          </NavLink>
          <NavLink
            style={{ color: "#01038a" }}
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            to="/tracker"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            <span className="mr">
              <BarChartIcon />
            </span>
            Tracker
          </NavLink>
          <NavLink
            style={{ color: "#01038a" }}
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            to="/planning"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <span className="mr">
              <DateRangeIcon />
            </span>
            Planning & Advisory
          </NavLink>
        </div>
        <div className="logoName2">
          <NavLink className="decor" to="#">
            <span className="mr">
              <img src="/images/profile.jpg" />
            </span>
            Vandana M
            <span className="ml">
              <ExpandMoreRoundedIcon />
            </span>
          </NavLink>
        </div>
      </div>

      <div className="rightside">
        <button
          style={{
            backgroundColor: "#01038a",
            color: "#fff",
            borderRadius: "15px",
            margin: "20px 5px 10px 55px",
            border: "none",
            width: "max-content",
          }}
        >
          <TimelineIcon />
          <span style={{ marginLeft: "5px" }}>Actions</span>
        </button>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
            width: "auto",
          }}
          className="fit"
        >
          <div style={{ float: "left" }}>
            <Card
              key={data[0].id}
              imgsrc={data[0].imgsrc}
              link={data[0].link}
            />
          </div>
          <div style={{ clear: "left", float: "left" }}>
            <Card
              key={data[1].id}
              imgsrc={data[1].imgsrc}
              link={data[1].link}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
