import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Multicard(props) {
  return (
    <>
      <div className="card">
        <div style={{ padding: "0%", margin: "0px" }}>
          <div style={{ float: "left", top: "0", marginBottom: "0%" }}>
            <p className="card__category">{props.title}</p>
          </div>
          <div style={{ float: "right", top: "0", marginBottom: "110%" }}>
            <span>
              <MoreHorizIcon />
            </span>
          </div>
          <div style={{ float: "left" }}>
            <form>
              <label>{props.label}</label>
              <br />
              <br />
              <input type="text" value="default" height="15px" size="12" />
            </form>
            <br />
            <p className="card__category">{props.status}</p>
          </div>
          <div style={{ float: "right", marginTop: "15%" }}>
            <img src={props.img} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Multicard;
