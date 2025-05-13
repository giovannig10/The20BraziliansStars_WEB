import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.paiFooter}>
      <div className={styles.paiLogo}>
        <img src="/images/logoBranco.png" alt="logo" className={styles.logo} />
      </div>

      <div className={styles.paiSections}>
        <section className={styles.contato}> <a href=""><h1>Entre em contato conosco</h1></a> </section>
        <div className={styles.divisoria}></div>
        <section className={styles.conheca}> <a href="../../pages/"><h1>Conheça nossa equipe</h1></a> </section>
      </div>

      <div className={styles.direitos}><p>Todos os direitos reservados ©</p></div>
    </div>
  );
};

export default Footer;