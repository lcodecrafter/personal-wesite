import st from './mainstatement.module.css';

export default function MainStatement() {
  return (
    <section className={st.container}>
      <h1 className="f-regular titles-f-size">Zen developer 🧘‍♂️</h1>
      <p>
        <strong>+7</strong> years of experience as a software developer.
        Experience developing solutions from scratch, adding new functionalities
        and enhancements to existing projects.
      </p>
      <p>
        <strong>Fast adaptation</strong> backed by my experience working in
        different teams and solutions. I like feeling ownership of the projects
        I work on.
      </p>
      <a href="#aboutme">More about me 🤌</a>
    </section>
  );
}
