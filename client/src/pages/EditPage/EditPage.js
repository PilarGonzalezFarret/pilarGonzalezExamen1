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
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillsOne, setSkillsOne] = useState("");
  const [skillsTwo, setSkillsTwo] = useState("");
  const [skillsThree, setSkillsThree] = useState("");

  const getPirate = async () => {
    let result = await axios.get("http://localhost:8000/api/pirates/get/" + pirateId);
    setName(result.data.pirateName);
    setType(result.data.pirateType);
    setDescription(result.data.pirateDescription);
    setSkillsOne(result.data.pirateSkills.skillOne);
    setSkillsTwo(result.data.pirateSkills.skillTwo);
    setSkillsThree(result.data.pirateSkills.skillThree);
  };

  const editPirate = async () => {
    let data = {
      pirateName: name,
      pirateType: type,
      pirateDescription: description,
      pirateSkills: {
        skillOne: skillsOne,
        skillTwo: skillsTwo,
        skillThree: skillsThree,
      },
    };
    try {
      let result = await axios.put("http://localhost:8000/api/pirates/update/"+pirateId,data);
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
          {name.length < 3 && name.length > 0 && (
            <p className={styles.error}>
              Name must be at least 3 characters long...
            </p>
          )}





          <label>Pirate Type:</label>


          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          {type.length < 3 && type.length > 0 && (
            <p className={styles.error}>
              Type must be at least 3 characters long...
            </p>
          )}






          <label>Pirate Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {description.length < 3 && description.length > 0 && (
            <p className={styles.error}>
              Description must be at least 3 characters long...
            </p>
          )}

      



          <ButtonCompo
            onclick={editPirate}
            name={"✏️ Edit Pirate"}
            color={"dodgerblue"}
          ></ButtonCompo>


          
        </form>

        <form>
          <label>Skills (optional):</label>
          <label>Skill 1:</label>
          <input
            type="text"
            value={skillsOne}
            onChange={(e) => setSkillsOne(e.target.value)}
          />
          <label>Skill 2:</label>
          <input
            type="text"
            value={skillsTwo}
            onChange={(e) => setSkillsTwo(e.target.value)}
          />
          <label>Skill 3:</label>
          <input
            type="text"
            value={skillsThree}
            onChange={(e) => setSkillsThree(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};