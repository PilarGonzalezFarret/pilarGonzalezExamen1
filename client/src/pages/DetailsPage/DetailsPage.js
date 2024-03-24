import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import { ButtonCompo } from "../../components/ButtonCompo/ButtonCompo.jsx";
import { HeaderCompo } from "../../components/HeaderCompo/HeaderCompo.jsx";

export const DetailsPage = () => {
  const params = useParams();
  const pirateId = params.id;

  const navigate = useNavigate();

  const [pirate, setPirate] = useState({
    pirateName: "",
    pirateUrl: "",
    pirateTreassure: 0,
    piratePhrase: "",
    piratePosition: "",
    pirateFeatures: false,
    
    /* {
      pegLeg: false,
      eyePatch: false,
      hookHand: false
    },  */
  });

  const getPirateById = async () => {
    try {
      let result = await axios.get(
        "http://localhost:8000/api/pirates/get/" + pirateId
      );
      setPirate(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const killPirate = async () => {
    try {
      let result = await axios.delete(
        "http://localhost:8000/api/pirates/delete/" + pirateId
      );
      if (result.status === 200) navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const seeCrew = () => {
    navigate("/");
  };

  useEffect(() => {
    getPirateById();
  }, []);

  return (
    <div>
      <HeaderCompo
        onclick={seeCrew}
        subTitle={`Details about: ${pirate.pirateName}`}
        linkName={"See Crew"}
       
      ></HeaderCompo>

      <div className={styles.container}>
        <div className={styles.subContainer}>
          <p>{`Position: ${pirate.piratePosition}`}</p>
        </div>
      
        <div className={styles.subContainer}>
          <p>{`Treassures: ${pirate.pirateTreassure}`}</p>
        </div>

        <div className={styles.subContainer}>
          <p>{`Peg Leg: ${pirate.pirateFeatures}`}</p>
        </div>

        <div className={styles.subContainer}>
          <p>{`Eye Patch: ${pirate.pirateFeatures}`}</p>
        </div>

        <div className={styles.subContainer}>
          <p>{`Hook Hand: ${pirate.pirateFeatures}`}</p>
        </div>
      </div>
      <div className={styles.customButton}>
      {
          <ButtonCompo
            onclick={killPirate}
            name={`Wallk the Plank ${pirate.pirateName}`}
            color={"red"}
            
          ></ButtonCompo>
        }
        </div>
    </div>
  );
};

//original