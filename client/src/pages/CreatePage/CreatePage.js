import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderCompo } from "../../components/HeaderCompo/HeaderCompo.jsx";
import { ButtonCompo } from "../../components/ButtonCompo/ButtonCompo.jsx";
import styles from "./CreatePage.module.css";

export const CreatePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [treassure, setTreasure] = useState(0);
  const [phrase, setPhrase] = useState("");
  const [position, setPosition] = useState("");
  const [skillsThree, setSkillsThree] = useState("");
  const [pegLeg, setPegLeg] = useState(false);
  const [eyePatch, setEyePatch] = useState(false);
  const [hookHand, setHookHand] = useState(false);

  const createPirate = async () => {
    if (name !== "" && url !== "" && treassure !== "") {
      let data = {
        pirateName: name,
        pirateUrl: url,
        pirateTreassure: treassure,
        piratePhrase: phrase,
        piratePosition: position,
        /* pirateSkills: {
          //skillOne: skillsOne,
          //skillTwo: skillsTwo,
          skillThree: skillsThree,
        }, */
        pirateFeatures: {
          pegLeg,
          eyePatch,
          hookHand,
        },
      };
      try {
        let result = await axios.post(
          "http://localhost:8000/api/pirates/new",
          data
        );
        if (result.status === 200) {
          navigate("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Please fill the form");
    }
  };

  const seeCrew = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderCompo
        onclick={seeCrew}
        linkName={"See Crew"}
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

          <label>Peg Leg:</label>
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
          />
          <ButtonCompo
            onclick={createPirate}
            name={"📤 Add Pirate"}
            color={"dodgerblue"}
          ></ButtonCompo>
        </form>
      </div>
    </div>
  );
};