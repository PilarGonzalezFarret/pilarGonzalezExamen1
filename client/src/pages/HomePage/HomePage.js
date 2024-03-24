import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeaderCompo } from "../../components/HeaderCompo/HeaderCompo.jsx";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const [pirateList, setPirateList] = useState([]);   

  const callPirateList = async () => {
    try {
      let result = await axios.get("http://localhost:8000/api/pirates/get");
      setPirateList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callPirateList();
  }, []);

  const goToEdit = (pirateId) => {
    navigate(`/pirates/${pirateId}/edit`);
  };

  const goToDetails = (pirateId) => {
    navigate(`/pirates/${pirateId}`);
  };

  const goToCreate = () => {
    navigate("/pirates/new");
  };

  return (
    <div>
      <HeaderCompo
        onclick={goToCreate}
        linkName={"Add a pirate"}
      ></HeaderCompo>
      <div className={styles.container}>
        <img
        <table className={styles.tableContainer}>
          {pirateList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.pirateName}</td>
                <td>{item.pirateType}</td>
                <td>

                  <button
                    className={styles.linkDet}
                    onClick={() => goToDetails(item._id)}    //Botón ok, ver width
                  >
                    View Pirate
                  </button>

                  <button className={styles.linkEdit} onClick={() => goToEdit(item._id)}>
                    Edit
                  </button>
                
                </td>
              </tr>
            );
          })}
        </table>
        <div></div>
      </div>
    </div>
  );
};