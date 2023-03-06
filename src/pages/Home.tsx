import Layout from '@/components/Layout';
import PersonalInfo from '@/components/PersonalInfo';
import MainStatement from '@/components/MainStatement';
import Career from '@/components/Career';

export default function Home() {
  return (
    <Layout>
      <PersonalInfo />
      <MainStatement />
      <Career />
    </Layout>
  );
}
