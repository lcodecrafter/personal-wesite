import Layout from '@/components/Layout';
import PersonalInfo from '@/components/PersonalInfo';
import MainStatement from '@/components/MainStatement';
import Career from '@/components/Career';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <Layout>
      <PersonalInfo />
      <MainStatement />
      <Career />
      <Skills />
      <AboutMe />
    </Layout>
  );
}
