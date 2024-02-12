import React from "react";
import Cel from "../Assets/celeb.png";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MuiPhoneNumber from "mui-phone-number";
function Login() {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <Box mx={"10%"}>
          <h2 style={{ color: "#18B1F1", textAlign: "start" }}>
            Unlock Exclusive Benefit
          </h2>

          <Box textAlign="left">
            <Typography>PHONE NUMBER</Typography>
            <Box display="flex" justifyContent={"space-between"} mb={2}>
              <MuiPhoneNumber
                size="small"
                variant="outlined"
                defaultCountry={"in"}
                
              />
              <TextField size="small" variant="outlined" type="number" />
            </Box>
            <Typography>NAME</Typography>
            <Box display="flex" mb={2}>
              <TextField size="small" variant="outlined" fullWidth />
            </Box>

            <Typography>EMAIL[OPTIONAL]</Typography>
            <Box display="flex" mb={2}>
              <TextField size="small" variant="outlined" fullWidth type="email"/>
            </Box>
            <Button
              variant="contained"
              sx={{ borderRadius: "2rem", background: "#18B1F1" }}
              onClick={() => {
                navigate("/home");
              }}
              fullWidth
            >
              CONTINUE
            </Button>
            <Typography sx={{ mt: ".5rem", fontSize: ".9rem" }}>
              Get ready to receive a secret code(OTP) on your phone
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <Box>
          <img
            style={{ objectFit: "cover", maxWidth: "100%" }}
            src={Cel}
            alt="No"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
