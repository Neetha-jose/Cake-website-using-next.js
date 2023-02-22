import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import CakeList from "../components/CakeList";
import styles from "../styles/Home.module.css";

export default function Home({cakeList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Restaurant in Newyork</title>
        <meta name="description" content="Best cake shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {<AddButton setClose={setClose} />}
      <CakeList cakeList={cakeList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      cakeList: res.data,
      admin,
    },
  };
};