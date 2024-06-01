import styles from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Explore o Universo do Mini Blog</h2>
            <p>
                Explore um universo de ideias, histórias e inspiração no Mini Blog. <br />
                Nossa plataforma, construída com React e Firebase, oferece uma jornada cativante de descobertas.
            </p>
            <Link to="/posts/create" className="btn">Criar post</Link>
        </div>
    )
}

export default About