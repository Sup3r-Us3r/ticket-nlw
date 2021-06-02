import { ReactElement } from 'react';
import styles from './styles.module.scss';

type WithChildren<T = {}> =
  T & { children: ReactElement };

const Ticket = () => {
  return (
    <div className={styles.ticketBox}>
      <div className={styles.ticketLeftSideContainer}>
        <div className={styles.ticketLeftSide}>
          <img src="images/mon-mission.png" alt="Mon" />
          <p>Cartão de emb.</p>
          <span>
            Nº <strong>00003332</strong>
          </span>
        </div>
      </div>

      <div className={styles.ticketRightSideContainer}>
        <div className={styles.ticketRightSide}>
          <img className={styles.nlwTogether} src="images/nlw.svg" alt="NLW Together" />
          <img className={styles.binary} src="images/binary.svg" alt="Binary" />

          <div className={styles.infoUser}>
            <img src="images/empty-avatar.png" alt="Empty Avantar" />
            <div>
              <p>Mayderson</p>
              <p>Sup3r-Us3r</p>
            </div>
          </div>

          <div className={styles.ticketMission}>
            <img src="images/reactjs.svg" alt="ReactJS" />
            <div>
              <p>Mission:</p>
              <strong>ReactJS</strong>
            </div>
          </div>

          <div className={styles.missionInfo}>
            <p>20 a 27<br/>de junho</p>
            <p>Online<br/>e gratuito</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
