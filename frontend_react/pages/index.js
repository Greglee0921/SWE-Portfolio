import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { About, Contact, Experience, Header, Projects, Skills} from '../containers';
import { Navbar } from '../components';

import styles from '../styles/App.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Greg's Portfolio</title>
      </Head>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
