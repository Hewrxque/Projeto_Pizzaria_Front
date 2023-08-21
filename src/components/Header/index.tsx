import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import { AuthContext } from "../../contexts/AuthContext";

import { FiLogOut } from "react-icons/fi";

export function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/Pizzaria.png" width={60} height={60} alt="" />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <a>Categoria</a>
          </Link>

          <Link href="/product">
            <a>Cardapio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#FFF" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
