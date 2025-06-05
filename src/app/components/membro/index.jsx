import styles from './membro.module.css';

const Membro = ({ img, name, func, github, gmail, linkedin }) => {
  return (
    <div className={styles.membro}>
      <img
        className={styles.imagem}
        src={img}
        alt="Person"
      />
      <div className={styles.texts}>
        <p>{name}</p>
        <span>{func}</span>
        <details className={styles.details}>
          <summary>Minhas redes</summary>
          <div className={styles.links}>
            {/* github */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                style={{ width: 24, height: 24 }}
              />
            </a>
            {/* linkedin */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                style={{ width: 24, height: 24 }}
              />
            </a>
            {/* gmail */}
            <a
              href={gmail}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Gmail"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Membro;