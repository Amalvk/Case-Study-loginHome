import { Typography } from "@mui/material";
import React from "react";
import RealEstate from "../Assets/realestate.png";

function Header() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            fontWeight: 600,
            textAlign: "center",
            fontSize: "26px",
            marginTop: "1rem",
            background: "#ECEBDD",
          }}
        >
          <div >
            <img
              style={{ objectFit: "fill  ", maxWidth: "50%" }}
              src={RealEstate}
              alt="No"
            />
          </div>
          <Typography
            sx={{ minWidth: "80%", alignSelf: "center", fontSize: ".7rem" }}
          >
            XYZ SYSTEMS LLP.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
