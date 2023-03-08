import Job from './Job';
import ingram from '@/assets/ingram.jpeg';

export default function Career() {
  return (
    <section className="">
      <h2 className="f-medium">Career</h2>
      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2020, to: 2023 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            Lead technical improvements and enhance the developer experience.
          </li>
          <li>
            Build the company’s websites with a focus on making them
            maintainable and usable for the marketing and developer team.
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            Migrate one of the biggest websites from being a static site to one
            managed by a CMS (WordPress), decreasing the developer workload and
            enhancing the marking autonomy. This was possible thanks to the
            creation of reusable and editable visual components that can be used
            in any part of the website without the intervention of the dev team.
          </li>
          <li>
            Improve my team’s efficiency by creating and standardizing processes
            to manage the code base and do better deployments, reducing almost
            completely the problems derived from working with several people on
            the same project.
          </li>
          <li>
            Lead improvements on the website´s performance by 40% by creating
            scripts to compress all the static images in the site, relocating
            blocking code, reducing the dom size, lazy loading images, etc.
          </li>
          <li>
            Lead the transition from the previous hosting Platformsh to
            Pantheon, improving the developing experience and reducing costs for
            the company.
          </li>
        </ul>
      </Job>

      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2020, to: 2023 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            Lead technical improvements and enhance the developer experience.
          </li>
          <li>
            Build the company’s websites with a focus on making them
            maintainable and usable for the marketing and developer team.
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            Migrate one of the biggest websites from being a static site to one
            managed by a CMS (WordPress), decreasing the developer workload and
            enhancing the marking autonomy. This was possible thanks to the
            creation of reusable and editable visual components that can be used
            in any part of the website without the intervention of the dev team.
          </li>
          <li>
            Improve my team’s efficiency by creating and standardizing processes
            to manage the code base and do better deployments, reducing almost
            completely the problems derived from working with several people on
            the same project.
          </li>
          <li>
            Lead improvements on the website´s performance by 40% by creating
            scripts to compress all the static images in the site, relocating
            blocking code, reducing the dom size, lazy loading images, etc.
          </li>
          <li>
            Lead the transition from the previous hosting Platformsh to
            Pantheon, improving the developing experience and reducing costs for
            the company.
          </li>
        </ul>
      </Job>

      <Job
        imageData={{ path: ingram, alt: 'Ingram Micro' }}
        position="Full stack developer"
        years={{ from: 2020, to: 2023 }}
      >
        <p className="f-regular">RESPONSIBILITIES</p>
        <ul>
          <li>
            Lead technical improvements and enhance the developer experience.
          </li>
          <li>
            Build the company’s websites with a focus on making them
            maintainable and usable for the marketing and developer team.
          </li>
        </ul>

        <p className="f-regular">KEY ACCOMPLISHMENTS</p>
        <ul>
          <li>
            Migrate one of the biggest websites from being a static site to one
            managed by a CMS (WordPress), decreasing the developer workload and
            enhancing the marking autonomy. This was possible thanks to the
            creation of reusable and editable visual components that can be used
            in any part of the website without the intervention of the dev team.
          </li>
          <li>
            Improve my team’s efficiency by creating and standardizing processes
            to manage the code base and do better deployments, reducing almost
            completely the problems derived from working with several people on
            the same project.
          </li>
          <li>
            Lead improvements on the website´s performance by 40% by creating
            scripts to compress all the static images in the site, relocating
            blocking code, reducing the dom size, lazy loading images, etc.
          </li>
          <li>
            Lead the transition from the previous hosting Platformsh to
            Pantheon, improving the developing experience and reducing costs for
            the company.
          </li>
        </ul>
      </Job>
    </section>
  );
}
