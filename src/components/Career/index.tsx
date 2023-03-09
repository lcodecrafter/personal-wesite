import Job from './Job';
import ingram from '@/assets/ingram.jpeg';
import appico from '@/assets/appico.jpeg';

export default function Career() {
  return (
    <section className="">
      <h2 className="f-regular titles-f-size">Career</h2>
      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2021, to: 2023 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            <b>Lead</b> technical improvements and <b>enhance</b> the developer
            experience.
          </li>
          <li>
            Build the company’s websites with a focus on making them
            <b> maintainable</b> and usable for the marketing and developer
            team.
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            <b>Migrate</b> one of the biggest websites from being a static site
            to one managed by a CMS (WordPress), decreasing the developer
            workload and enhancing the marking autonomy. This was possible
            thanks to the creation of <b>reusable</b> and editable visual
            components that can be used in any part of the website without the
            intervention of the dev team.
          </li>
          <li>
            Improve my team’s efficiency by creating and <b>standardizing </b>
            processes to manage the code base and do better deployments,
            reducing almost completely the problems derived from working with
            several people on the same project.
          </li>
          <li>
            Lead improvements on the website´s <b>performance</b> by 40% by
            creating scripts to compress all the static images in the site,
            relocating blocking code, reducing the dom size, lazy loading
            images, etc.
          </li>
          <li>
            Lead the transition from the previous cloud hosting Platformsh to
            Pantheon, <b>improving</b> the developing <b>experience</b> and
            reducing costs for the company.
          </li>
        </ul>
      </Job>

      <Job
        imageData={{ path: appico, alt: 'Appico' }}
        position="Frontend developer"
        years={{ from: 2020, to: 2021 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            Create new features and maintain the front end of Porsche´s site and
            its blog.{' '}
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            Create a library to <b>unify</b> the way to track all the events of
            the site to be able to pass them to GA and to be used by the
            components of the page itself, in a more standardized way. This
            library needed to be as small, <u>maintainable</u>, and{' '}
            <u>testable</u> as possible so that in case of being touched by
            other developers, it would minimize the possibility of introducing
            errors that would propagate throughout the site. To <b>achieve </b>
            this, I chose to use Webpack as a bundler, Typescript to have strong
            typing, and Jest, to ensure that in each build that was made, all
            unit tests were run and to be able to catch any bugs.
          </li>
          <li>
            Fix successfully almost all the bugs assigned to me of existing and
            new features, helping to improve the experience of the users. It was
            quite challenging due to there was a huge code base and lots of
            micro-sites that were unknown to other teammates so I had to be very
            <b> flexible and careful</b>.
          </li>
          <li>
            Make improvements and new features on the blog site to create a
            better user experience and attract more users. It was a challenge
            because it was made using React and a headless CMS <b>without </b>
            the use of any mechanism to manage the global state of the app.
          </li>
        </ul>
      </Job>

      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2015, to: 2019 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            Make the Frontend and Backend of <b>connectors</b> used for big
            companies to sell their products on the Ingram Micro marketplace.
          </li>
          <li>
            Create new features and maintain a CMS <u>built from scratch</u>.
          </li>
          <li>
            Create UIs and middlewares to <b>expand</b> the <b>capabilities</b>
            of Ingram Micro´s platform.
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            <b>Successfully</b> released an inherited project from another
            company (middleware and a control panel) that was at 60% of
            completion and very <b>high pressure</b>. Besides, I and 2 more
            people had to <u>learn a new stack</u> and tools never used before
            in less than a month. Thanks to our efforts and dedication we could
            stick to the initial deadline, which improves the confidence in our
            company and retain a new client (Toyoya in this case).
          </li>
          <li>
            Create new features and maintain a couple of CMSs built from scratch
            for other companies with <u>a lot of tech dev</u>.
          </li>
          <li>
            Successfully <b>release</b> and maintain a connector for Microsoft
            with a lot of changes on its API from the initial release and
            constant changes and improvements in the UI.
          </li>
        </ul>
      </Job>
    </section>
  );
}
