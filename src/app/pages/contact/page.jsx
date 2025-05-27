import styles from './contact.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

const ContactPage = () => {
    return (
        <div className={styles.container}>

            <Header />

            <main className={styles.pai}>

                <div className={styles.main}>

                    <h1>Entre em contato conosco</h1>

                    <div className={styles.paiForms}>

                        <form action="">
                            <div>
                                <label className={styles.label}>
                                    Nome:
                                    <input type="text" name="nome" className={styles.input} required />
                                </label>
                            </div>

                            <div>
                                <label className={styles.label}>
                                    Email:
                                    <input type="email" name="email" className={styles.input} required />
                                </label>
                            </div>

                            <div>
                                <label className={styles.label}>
                                    Mensagem:
                                    <textarea name="mensagem" className={styles.textarea} required></textarea>
                                </label>
                            </div>

                            <div>
                                <button type="submit" className={styles.button}>Enviar</button>
                            </div>

                        </form>

                    </div>
                </div>

            </main>

            <Footer />

        </div>
    )
}

export default ContactPage;