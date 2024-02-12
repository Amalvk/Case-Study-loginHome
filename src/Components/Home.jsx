import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Button, Grid, Typography } from "@mui/material";
import Membership from "../Assets/membership.jpg";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/system";
import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ClickButton = styled(Button)({
  border: "2px solid #89B9AE",
  borderRadius: "2rem",
  background: "#E3F6F1",
  height: "1.5rem",
  fontFamily: "monospace",
  fontSize: "100%",
  "&:hover": {
    background: "#5AE3C2",
    border: "2px solid #4CB89E",
  },
});

function Home() {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          right: "5%",
          display: { xs: "none", md: "inline" },
        }}
      >
        <PersonIcon fontSize="large" color="primary" />
        <Typography fontSize={".8rem"}>Joseph Lazar</Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { background: "green", height: "1px" },
            }}
            sx={{ overflowX: "auto" }}
          >
            {["Home", "Dashboard", "Translation", "Products", "Journal"].map(
              (item, index) => (
                <Tab
                  key={index}
                  label={item}
                  sx={{
                    fontWeight: 500,
                    fontSize: ".6rem",
                    color: "green",
                    "&.Mui-selected": {
                      color: "green",
                    },
                  }}
                />
              )
            )}
          </Tabs>
        </Box>
      </Box>
      <Grid container my={"3rem"}>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
          <Box mx={"15%"}>
            <Box display={"block"} textAlign={"left"}>
              <Typography fontFamily={"sans-serif"} fontSize="1.5rem">
                New Arrival
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: ".6rem" }}>
                Join Today
              </Typography>
            </Box>
            <Box>
              <img
                style={{ objectFit: "cover", maxWidth: "100%" }}
                src={Membership}
                alt="No"
              />
            </Box>
            <ClickButton variant="outlined" sx={{ minWidth: "90%" }} fullwidth>
              Join Now
            </ClickButton>
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
          {" "}
          
         <Slider/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
