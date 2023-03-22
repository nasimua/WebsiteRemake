import React from "react";
import "../App.css";
import sBanner from "../images/superstars-banner.png";

function Superstars() {
  return (
    <div className="Superstars">
      <img className="banner" src={sBanner} alt="banner" />
      <div className="superstars-content">
        <p className="sub-heading">
          WWE: <strong>Champions</strong>
        </p>

        {/* create a container to hold all the superstars in */}
        <div className="superstars-container">
          {/* create containers for each row */}
          <div className="row1">
            {/* create container for each superstar to hold picture, name and championship */}
            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/04/Roman_Profile--f2e24f84ca2679ca0be9da35cb9be6fd.png"
                alt="roman"
              />
              <h3 className="champ-name">Roman Reigns</h3>
              <p className="title">Universal Champion</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/04/Roman_Profile--f2e24f84ca2679ca0be9da35cb9be6fd.png"
                alt="roman"
              />
              <h3 className="champ-name">Roman Reigns</h3>
              <p className="title">WWE Champion</p>
            </div>
          </div>

          <div className="row2">
            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/04/Bianca_Belaire_Profile--0bfaba2abae2272062e5f939511e4154.png"
                alt="bianca"
              />
              <h3 className="champ-name">Bianca Belair</h3>
              <p className="title">Raw Women's Champion</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2023/01/CharlotteFlair_01122023PB_2609_Profile--e796ffd063508696bca43f55d2525e1b.png"
                alt="charlotte"
              />
              <h3 className="champ-name">Charlotte Flair</h3>
              <p className="title">SmackDown Women's Champion</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/06/Gunther_Profile--58deeb4986d670eea2d66a909310553a.png"
                alt="gunther"
              />
              <h3 className="champ-name">Gunther</h3>
              <p className="title">Intercontinental Champion</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2023/01/Austin_Theory_PROFILE--2214665cedc437f0712d016de949574a.png"
                alt="austin"
              />
              <h3 className="champ-name">Austin Theory</h3>
              <p className="title">United States Champion</p>
            </div>
          </div>

          <div className="row3">
            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/05/TheUsosUndisputed--ca99a9c4371461f205dd3cf3cce146af.png"
                alt="usos"
              />
              <h3 className="champ-name">The Usos</h3>
              <p className="title">Raw Tag Team Champions</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/05/TheUsosUndisputed--ca99a9c4371461f205dd3cf3cce146af.png"
                alt="usos"
              />
              <h3 className="champ-name">The Usos</h3>
              <p className="title">SmackDown Tag Team Champions</p>
            </div>

            <div className="champ">
              <img
                src="https://www.wwe.com/f/styles/wwe_1_1_460/public/all/2022/10/DakotaKai_IyoSky--f008d2667383e1f3308db4f0ddda610d.png"
                alt="damage ctrl"
              />
              <h3 className="champ-name">Damage CTRL</h3>
              <p className="title">WWE Women's Tag Team Champions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superstars;
