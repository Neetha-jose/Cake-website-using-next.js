import styles from "../styles/CakeList.module.css";
import CakeCard from "./CakeCard"

const CakeList = ({cakeList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CAKE IN TOWN</h1>
      <p className={styles.desc}>
        The Cake Shop, is a Cake Studio that offers Wedding cakes, Custom cakes, 
        and a small variety of bite sized treats. Everything is made from scratch
        in house and with localey sourced ingredients when possible.
      </p>
      <div className={styles.wrapper}>
      {cakeList.map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
      ))}
    </div>
    </div>
  );
};

export default CakeList;
