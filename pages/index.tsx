import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Welcome from '../components/welcome';
import MainProjects from '../components/main_projects';
import MainAbout from '../components/main_about';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <Welcome />
      <MainProjects />
      <MainAbout />
    </Layout>
  )
}

export default Home
