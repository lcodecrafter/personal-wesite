import PersonalInfo from '../components/PersonalInfo';
import MainStatement from '../components/MainStatement';
import Layout from '../components/UI/Layout';

export default function Home() {
  return (
    <Layout>
      <PersonalInfo />
      <MainStatement />
    </Layout>
  );
}
