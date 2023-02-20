import Codewars from './icons/Codewars';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import styles from './socialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.container}>
      <Linkedin /> <Github /> <Codewars />
    </div>
  );
}
