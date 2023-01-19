import Head from 'next/head'
import Image from 'next/image'


import { About, Contact, Experience, Home, Projects, Skills} from '../containers';
import { Navbar } from '../components';
import { fetchSkills} from '../utils/fetchSkills';
import { fetchProjects} from '../utils/fetchProjects';

const App = ({skills, projects}) => (
  <div className='app'>
    <Head>
      <title>Gregory Lee-Software Engineer</title>
      <link rel='shortcut icon' href='../assets/logo.png' />
    </Head>
    <Navbar />
    <section id='Home'>
      <Home />
    </section>
    <section id='About'>
      <About />
    </section>
    <section id='Skills'>
      <Skills skills={skills}/>
    </section>
    <section id='Projects'>
      <Projects projects={projects}/>
    </section>
    <section id='Contact'>
      <Contact />
    </section>
    </div>
    );

export default App;

export const getStaticProps = async () => {
  const skills = await fetchSkills();
  const projects = await fetchProjects();

  return {
    props: {
      skills,
      projects,
    },
    revalidate: 10,
  };
};
