import Head from "next/head";
import logo from '../../public/Pizzaria.png'
import Image from "next/image";
import styles from '../../styles/home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Rick's Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
      <Image src={logo} alt="Rick's Pizza"/>
      </div>
    </>
  );
}
