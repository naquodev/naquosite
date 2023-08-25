import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      {/* <div className="blur">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1235"
          height="1613"
          viewBox="0 0 1235 1613"
          fill="none"
        >
          <g filter="url(#filter0_f_3_273)">
            <path
              d="M224.483 745.482C47.9674 701.033 -102.038 692.445 -110.563 726.301C-119.089 760.157 17.0944 823.635 193.61 868.085C370.126 912.534 520.131 921.122 528.657 887.266C537.182 853.41 400.999 789.932 224.483 745.482Z"
              fill="#FF6736"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_273"
              x="-815.943"
              y="0.608643"
              width="2049.98"
              height="1612.35"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="352.5"
                result="effect1_foregroundBlur_3_273"
              />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200"
          height="1613"
          viewBox="0 0 1200 1613"
          fill="none"
        >
          <g filter="url(#filter0_f_3_274)">
            <path
              d="M1040.48 745.482C863.967 701.033 713.962 692.445 705.437 726.301C696.911 760.157 833.094 823.635 1009.61 868.085C1186.13 912.534 1336.13 921.122 1344.66 887.266C1353.18 853.41 1217 789.932 1040.48 745.482Z"
              fill="#FF6736"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_274"
              x="0.0571289"
              y="0.608643"
              width="2049.98"
              height="1612.35"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="352.5"
                result="effect1_foregroundBlur_3_274"
              />
            </filter>
          </defs>
        </svg>
      </div> */}
      <div className="left">
        <img src="./services.svg" alt="" />
      </div>
      <div className="right">
        <h1>Ready to work with me ?</h1>
        <p>
          I'm ready to work with you. Feel free to reach out to me via{" "}
          <a href="">email</a> to further discuss and prepare a quote.
        </p>
      </div>
    </div>
  );
};

export default Services;
