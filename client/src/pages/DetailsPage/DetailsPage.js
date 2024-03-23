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
    pirateType: "",
    pirateDescription: "",
    pirateSkills: {
      skillOne: "",
      skillTwo: "",
      skillThree: "",
    },
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

  const adoptPirate = async () => {
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
        linkName={"Back to Home"}
        boton={
          <ButtonCompo
            onclick={adoptPirate}
            name={`🏰 Adopt ${pirate.pirateName}`}
            color={"red"}
          ></ButtonCompo>
        }
      ></HeaderCompo>

      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h3>Pirate Type: </h3>
          <label>{pirate.pirateType}</label>
        </div>

        <div className={styles.subContainer}>
          <h3>Description:</h3>
          <label>{pirate.pirateDescription}</label>
        </div>

        <div className={styles.subContainer}>
          <h3>Skills :</h3>
          <label className={styles.skills}>
            {pirate.pirateSkills.skillOne} <br />
            {pirate.pirateSkills.skillTwo} <br />
            {pirate.pirateSkills.skillThree}
          </label>
        </div>
      </div>
    </div>
  );
};