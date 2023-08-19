import Head from "next/head";
import logo from "../../../public/Pizzaria.png";

import Image from "next/image";

import styles from "../../../styles/home.module.scss";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.image} src={logo} alt="Rick's Pizza" />

        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form>
            <Input placeholder="Digite seu nome" type="text" />

            <Input placeholder="Digite seu email" type="text" />

            <Input placeholder="Digite sua senha" type="password" />

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>

          <a href="/" className={styles.text}>
            Já possui uma conta? Faça seu login!
          </a>
        </div>
      </div>
    </>
  );
}
