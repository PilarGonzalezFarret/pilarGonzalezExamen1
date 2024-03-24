import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderCompo } from "../../components/HeaderCompo/HeaderCompo.jsx";
import styles from "./EditPage.module.css";
import { ButtonCompo } from "../../components/ButtonCompo/ButtonCompo.jsx";

export const EditPage = () => {
  const params = useParams();
  const pirateId = params.id;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [treassure, setTreasure] = useState(0);
  const [phrase, setPhrase] = useState("");
  const [position, setPosition] = useState("");
  /* const [pegLeg, setPegLeg] = useState(false);
  const [eyePatch, setEyePatch] = useState(false);
  const [hookHand, setHookHand] = useState(false); */

  const getPirate = async () => {
    let result = await axios.get("http://localhost:8000/api/pirates/get/" + pirateId);
    setName(result.data.pirateName);
    setUrl(result.data.pirateUrl);
    setTreasure(result.data.pirateTreassure);
    setPhrase(result.data.piratePhrase);
    setPosition(result.data.piratePosition);
    /* setPegLeg(result.data.pirateFeatures.pegLeg);
    setEyePatch(result.data.pirateFeatures.eyePatch);
    setHookHand(result.data.pirateFeatures.hookHand); */
  };

  const editPirate = async () => {
    let data = {
      pirateName: name,
      pirateUrl: url,
      pirateTreassure: treassure,
      piratePhrase: phrase,
    };
    try {
      let result = await axios.put("http://localhost:8000/api/pirates/update/" + pirateId, data);
      if (result.status === 200) {
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getPirate();
  }, []);

  const seeCrew = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderCompo
        onclick={seeCrew}
        subTitle={`Edit ${name}`}
        linkName={"Back to Home"}
      ></HeaderCompo>


      <div className={styles.formContainer}>
        <form>
          <label>Pirate Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.length < 5 && name.length > 0 && (
            <p className={styles.error}>
              Name must be at least 5 characters long...
            </p>
          )}
          {name.length > 30 && (
            <p className={styles.error}>
              Name must be up to 30 characters long...
            </p>
          )}

          <label>Image Url:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <label># of Treassure Chests:</label>
          <input
            type="number"
            value={treassure}
            onChange={(e) => setTreasure(e.target.value)}
          />

          <label>Pirate Catch Phrase:</label>
          <input
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          {phrase.length < 5 && phrase.length > 0 && (
            <p className={styles.error}>
              Pirate Catch Phrase must be at least 5 characters long...
            </p>
          )}


        </form>
        <form>
          <label>Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select Position</option>
            <option value="Captain">Captain</option>
            <option value="Tinkerbell">Tinkerbell</option>
            <option value="Warrior">Warrior</option>
            <option value="Cook">Cook</option>
            <option value="Gunner">Gunner</option>
            <option value="Littlefish">Littlefish</option>
          </select>

          {/* <label>Peg Leg:</label>
           <input
            type="checkbox"
            checked={pegLeg}
            onChange={(e) => setPegLeg(e.target.checked)}
          /> 
          <label>Eye Patch:</label>
          <input
            type="checkbox"
            checked={eyePatch}
            onChange={(e) => setEyePatch(e.target.checked)}
          />
          <label>Hook Hand:</label>
          <input
            type="checkbox"
            checked={hookHand}
            onChange={(e) => setHookHand(e.target.checked)}
          /> */}

          <ButtonCompo
            onclick={editPirate}
            name={"✏️ Edit Pirate"}
            color={"dodgerblue"}
          ></ButtonCompo>
        </form>
      </div>
    </div>
  );
};