import React from "react";
import "../App.css";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="hero-section">
        <div className="hero-container">
          <img
            src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2023/02/20230203_SD_MatchPreview_UsoBraunRIcochet_FC_Tonight--091bf069f9297f27d23ca48c3dd13db6.jpg"
            alt="Hero"
            className="hero-img"
          />
        </div>
        <div className="info-box">
          <h3>
            Braun Strowman & Ricochet to challenge The Usos for the SmackDown
            Tag Team Championships
          </h3>
        </div>
      </div>

      <div className="trending-section">
        <div className="trending-container">
          <div className="heading-container">
            <h4 className="heading">Trending</h4>
            <p className="subheading">WWE NEWS</p>
          </div>

          <div className="content-container">
            <a href="https://www.wwe.com/shows/eliminationchamber/article/la-super-boutique">
              <div className="content">
                <img
                  src="https://www.wwe.com/f/styles/wwe_16_9_l_FC/public/all/2023/02/CS-024205_EC_Store_Digital_1920x1080--29381c246178a95c46e8dabd0f78ecf2.jpg"
                  alt="info"
                />
                <p className="description">
                  Don't miss WWE La Super Boutique during WWE Elimination
                  Chamber weekend
                </p>
              </div>
            </a>

            <a href="https://www.wwe.com/article/summerslam-2023-detroit-ford-field-august-5">
              <div className="content">
                <img
                  src="https://www.wwe.com/f/styles/wwe_16_9_l_FC/public/all/2023/02/83576-LVE-D_SummerSlam_ReSaleBanners_Social_1920x1080a--e9bae19b3d0a13065d6458fab447ce33.jpg"
                  alt="info"
                />
                <p className="description">
                  SummerSlam headed to Ford Field in Detroit on August 5
                </p>
              </div>
            </a>

            <a href="https://www.wwe.com/shows/wrestlemania/article/undertaker-1-deadman-show-in-las-vegas-and-los-angeles-2023">
              <div className="content">
                <img
                  src="https://www.wwe.com/f/styles/wwe_16_9_l_FC/public/all/2023/02/CS-024106_Undertaker_Go_Home_Digital_1920x1080_-_Combo--13a1b613f08414279d0b44deab7f7561.jpg"
                  alt="info"
                />
                <p className="description">
                  UNDERTAKER 1 deadMAN SHOW comes to Las Vegas and Los Angeles
                  this March - Tickets available Feb. 14 at 10 a.m. PT.
                </p>
              </div>
            </a>

            <a href="https://www.wwe.com/article/friday-night-smackdown-headed-to-the-o2-in-london-the-night-before-money-in-the-bank">
              <div className="content">
                <img
                  src="https://www.wwe.com/f/styles/wwe_16_9_l_FC/public/all/2023/02/83623_LVE-D_COMBO_1920x1080-opt2--5c83b177da3e88cf03b42578702e4551.jpg"
                  alt="info"
                />
                <p className="description">
                  SmackDown headed to The O2 in London the night before Money in
                  the Bank
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
