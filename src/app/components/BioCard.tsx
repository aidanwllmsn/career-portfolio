import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { DockDemo } from "./dock";

const BioCard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Image Grid */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="Portrait.jpg"
              alt="Picture of me"
              className="w-64 h-64 mx-auto mb-12 rounded-xl overflow-hidden object-cover"
            />
          </Box>
        </Grid>

        {/* Info Grid */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              paddingLeft: { xs: 0, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <h1 className="text-white text-4xl m-0 font-bold">
              Aidan Williamson
            </h1>
            <h1 className="text-gray-200 text-2xl m-0 font-medium">
              Full-Stack Web Developer | Software Engineer
            </h1>
            <div className="flex justify-start items-center text-gray-400">
              <div className="h-[20px] w-[20px] custom">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <span>Los Angeles, CA</span>
            </div>
            <DockDemo />
          </Box>
        </Grid>
      </Grid>

      {/* Description Box */}
      <div className="mb-5 text-white text-lg font-sans mt-4">
        I'm a Full-Stack Web Developer and Software Engineer. I graduated from
        the University of California, Santa Cruz with a B.S in Computer
        Engineering. I have been programming for 5+ years. I create professional
        websites and software solutions.
      </div>
    </Box>
  );
};

export default BioCard;
