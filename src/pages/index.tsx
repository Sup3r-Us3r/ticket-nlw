import Link from 'next/link';
import Ticket from '../components/Ticket';

import styles from '../styles/index.module.scss';

const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <section className={styles.infoMissionContainer}>
          <h1>Bem vindo à</h1>

          <div className={styles.title}>
            <img src="images/reactjs.svg" alt="ReactJS" />
            <div>
              <p>Mission:</p>
              <strong>ReactJS</strong>
            </div>
          </div>

          <p className={styles.important}>
            <strong>Importante: </strong>
            Siga os passos abaixo para estar<br/>100% preparado(a) para a missão.
          </p>

          <div className={styles.actions}>
            <button type="button">
              <span>01</span>
              <img src="images/discord.svg" alt="Discord" />
              <p>Entrar na<br/>comunidade exclusiva</p>
              <img src="images/arrow-right.svg" alt=">" />
            </button>
            <button type="button">
              <span>02</span>
              <img src="images/github.svg" alt="Discord" />
              <p>Gerar ticket<br/>com seu GitHub</p>
              <img src="images/arrow-right.svg" alt=">" />
            </button>
          </div>

          <div className={styles.follow}>
            <p>
              Acompanhe a gente no<br/>
              <Link href="#">
                <a>Instagram</a>
              </Link> e <Link href="#">
                <a>YouTube</a>
              </Link> e fique de olho<br/>
              nos e-mails que vamos enviar.
            </p>
          </div>
        </section>

        <section className={styles.ticketContainer}>
          <Ticket />
        </section>
      </div>
    </main>
  );
}

export default HomePage;
