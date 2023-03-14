import SocialLinks from '@/components/UI/SocialLinks';
import portraitImg from '@/assets/me.jpeg';

import styles from './personalInfo.module.css';

export default function PersonalInfo() {
  return (
    <section className={styles['personal-info']}>
      <div className={styles['image-container']}>
        <img src={portraitImg} alt="leandro" />
      </div>
      <div className={styles['info-container']}>
        <span>
          <b>Leandro Otero Lopez</b>
        </span>
        <br />
        <span>Full Stack developer at Ingram Micro</span>
        <br />
        <span>Cantabria, Spain</span>
        <SocialLinks />
      </div>
    </section>
  );
}
