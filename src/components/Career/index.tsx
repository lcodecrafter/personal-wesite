import Job from './Job';
import ingram from '@/assets/ingram.jpeg';

export default function Career() {
  return (
    <section className="mt-1">
      <h2 className="f-medium">Career</h2>
      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2020, to: 2023 }}
      >
        This is a cool job description
      </Job>
    </section>
  );
}
