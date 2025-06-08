import styles from "./loading.module.css";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <PulseLoader
        color="#000"
        size={30}
        margin={2}
        style={{ transitionDelay: "2s" }}
      />
      Carregando...
    </div>
  );
};

export default Loading;