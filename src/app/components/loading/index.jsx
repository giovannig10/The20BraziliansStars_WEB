import styles from "./loading.module.css";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <PulseLoader
        color="#36d7b7"
        size={15}
        margin={2}
        style={{ transitionDelay: "0s" }}
      />
      Carregando filmes...
    </div>
  );
};

export default Loading;