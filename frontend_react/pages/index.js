import Head from 'next/head'
import Image from 'next/image'


import { About, Contact, Experience, Header, Projects, Skills} from '../containers';
import { Navbar } from '../components';

import styles from '../styles/App.module.scss'



const App = () => (
  <div className={styles.app}>
    <Head>
      <title>Greg's Portfolio</title>
    </Head>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    </div>
    );

export default App;
