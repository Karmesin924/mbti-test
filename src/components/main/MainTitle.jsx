import styles from '../../App.module.css';

const MainTitle = () => {
  return (
    <div className={styles.main_title}>
      <p className={styles.title_light}>MBTI로 알아보는</p>
      <p className={styles.title_bold}>나와 어울리는 고양이 찾기</p>
      <img
        className={styles.title_img}
        src="https://github.com/Karmesin924/mbti-test/blob/main/public/cats.png?raw=true"
      />
    </div>
  );
};

export default MainTitle;
