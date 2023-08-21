import Head from "next/head";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";

import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Product() {
  return (
    <>
      <Head>
        <title>Novo Produto - Rick Pizzaria</title>
      </Head>
      <Header />
      
      <main className={styles.container}>
        <h1>Novo produto</h1>

        <form className={styles.form}>
          <select>
            <option>bebidas</option>
            <option>pizza</option>
          </select>

          <input 
          type="text"
          placeholder="Digite o nome do produto" 
          className={styles.input}
          />

          <input
          type="text"
          placeholder="Preço do produto"
          className={styles.input}
           />

            <textarea
            placeholder="Descreva seu produto..."
            className={styles.input}
            />

            <button className={styles.buttonAdd} type="submit">
                Cadastrar
                </button>
        </form>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
