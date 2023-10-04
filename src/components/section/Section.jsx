import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.sectionDivChildren}>{children}</div>
    </>
  );
};
