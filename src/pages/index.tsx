import { useContext, FormEvent } from "react";
import Head from "next/head";
import logo from "../../public/Pizzaria.png";

import Image from "next/image";

import styles from "../../styles/home.module.scss";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const {signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email: "algum@teste.com",
      password: "123456"
    }
    
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Rick's Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.image} src={logo} alt="Rick's Pizza" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" type="text" />

            <Input placeholder="Digite sua senha" type="password" />

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>

         
            <a href="/signup" className={styles.text}>Nao possui uma conta? Cadastre-se!</a>
         

        </div>
      </div>
    </>
  );
}
