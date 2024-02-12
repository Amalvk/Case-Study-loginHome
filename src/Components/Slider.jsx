import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Img1 from "../Assets/img1.jpg";
import Img2 from "../Assets/img2.jpg";
import Img3 from "../Assets/img3.jpg";

import { Pagination,Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const ParentBox = styled(Box)({
  border: "1px solid black",
  maxWidth: "20%",
  display: "block",
  overflow: "hidden",
  borderRadius: "1rem",
  alignItems: "flex-start",
  color: "#0F8BD3",
  fontFamily: "inherit",
});

const ChildImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

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

function Slider() {
  const example = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mx: "10%",
        }}
      >
        <ParentBox>
          <Box>
            <ChildImage src={Img1} alt="Child" />
          </Box>
          <Box alignSelf={"center"}>
            <Typography>Lower Intrest Rates</Typography>
          </Box>
        </ParentBox>
        <ParentBox>
          <Box>
            <ChildImage src={Img2} alt="Child" />
          </Box>
          <Box alignSelf={"center"}>
            <Typography>Intrest Free Payments</Typography>
          </Box>
        </ParentBox>
        <ParentBox>
          <Box>
            <ChildImage src={Img3} alt="Child" />
          </Box>
          <Box alignSelf={"center"}>
            <Typography>Discount on materials</Typography>
          </Box>
        </ParentBox>
      </Box>
    );
  };

  const returnValue = example();

  return (
    <Box>
      <Box my={"1rem"}>
        <Typography
          sx={{
            color: "#33B092",
            fontFamily: "system-UI",
            fontSize: "2rem",
          }}
        >
          Unlock Premium Features Now
        </Typography>
      </Box>

      <Swiper
        modules={[Pagination,Navigation]}
        spaceBetween={50}
        navigation={{
          clickable: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          color: 'red' // Change this to your desired color
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{paddingBottom:'3rem','--swiper-pagination-color': 'green'}}
      >
        <SwiperSlide> {returnValue} </SwiperSlide>
        <SwiperSlide> {returnValue} </SwiperSlide>
        <SwiperSlide> {returnValue} </SwiperSlide>

        <div style={{ color: 'green' }} className="swiper-button-next"></div>
  <div style={{ color: 'green' }} className="swiper-button-prev"></div>
      </Swiper>

      <Box display={"block"} lineHeight={"2rem"} mt={"1.5rem"}>
        <Box>
          <ClickButton
            variant="outlined"
            sx={{
              minWidth: "20%",
              backgroundImage:
                "linear-gradient(to right, #0D7859, #FFFF, #0D7859)",
            }}
          >
            Unlock Now{" "}
          </ClickButton>
        </Box>
        <Box>
          <ClickButton
            variant="outlined"
            sx={{
              minWidth: "15%",
              backgroundImage:
                "linear-gradient(to right, #0D7859, #FFFF, #0D7859)",
            }}
          >
            Details{" "}
          </ClickButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Slider;
