import Head from 'next/head'
import Image from 'next/image'


import { About, Contact, Experience, Home, Projects, Skills} from '../containers';
import { Navbar } from '../components';
import { fetchSkills } from '../utils/fetchSkills';

const App = ({skills}) => (
  <div className='app'>
    <Head>
      <title>Gregory Lee's Portfolio</title>
    </Head>
    <Navbar />
    <section id='Home'>
      <Home />
    </section>
    <section id='About'
    className='app__container'
    style={{alignItems: "center"}}>
      <About />
    </section>
    {/* <Experience /> */}
    <section id='Skills'
      className='app__container'>
      <Skills skills={skills}/>
    </section>
    <section id='Projects'>
      <Projects />
    </section>
    <section id='Contact'>
      <Contact />
    </section>
    </div>
    );

export default App;

export const getStaticProps = async () => {
  const skills = await fetchSkills();

  return {
    props: {
      skills
    },
    revalidate: 10,
  };
};
