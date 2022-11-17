import Head from 'next/head'
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Link from 'next/link.js';

export default function Resources() {
  const PROGRAM_PAGE_LINK = "https://www.sfu.ca/computing/prospective-students" +
    "/undergraduate-students/programs/degree-programs/softwaresystems.html"
  const CONSTITUTION_LINK = "https://ssss-sfu.github.io/assets/documents/constitution.pdf"
  const SOFTWARE_PAGE_LINK = "https://www.sfu.ca/information-systems/services/software.html"
  const SOSY101_21_SLIDE_LINK = "https://docs.google.com/presentation/d/1DvVg9A" +
    "0_1IMTF6LGJk708kxhEhivv7ubsYhSTox3LEo/edit?usp=sharing" 
  const SOSY101_21_FAQ_LINK = "https://docs.google.com/document/d" +
    "/1lIQfeQEIZM3QulrZ2eKNpI6nq4QdmS4h1HfxBgl5IXI/edit?usp=sharing"
  const SOSY101_22_SLIDE_LINK = "https://docs.google.com/presentation/d" +
    "/1mK6rP5rVh_NbN1zgMCqNuFS4rf7k9IxNYOgfO0u9qbY/edit?usp=sharing"
  const COOP_PAGE_LINK = "https://www.sfu.ca/coop/programs/sosy.html"

  return (
    <div className='container'>
      <Head>
        <title>Resources</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <section>
      <h2>Resources</h2>

      <ul>
      <li><Link href={PROGRAM_PAGE_LINK}>Software Systems program page</Link></li>

      {/* this constitution file might need to be updated */}
      <li><Link href={CONSTITUTION_LINK}>Constitution</Link></li>

      {/* TODO: put them together in a webpage format*/}
      {/* using Google slide links past presentations. */}
      <li>Sosy 101
        <ul>
        <li>2020 <Link href={SOSY101_21_SLIDE_LINK}>presentation slides</Link>
          <Link href={SOSY101_21_FAQ_LINK}> & FAQ</Link></li>
        <li>2021 <Link href={SOSY101_22_SLIDE_LINK}>presentation slides</Link></li>
        </ul>
      </li>

      <li><Link href={SOFTWARE_PAGE_LINK}>SFU free software</Link></li>
      {/* TODO: currently no link for these items */}
      <li><Link href="">Looking to enroll in Software Systems?</Link></li>
      <li><Link href="">Academic Repo</Link> </li>
      </ul>
      </section>

      <section>
      <h2>FAQ</h2>
      <details>
        <summary>What is Software Systems?</summary>
        <p>
        Software Systems (SoSy) is a program within the School of Computing Science,
        that offers courses at both the Surrey and Burnaby campuses. By completing
        the program, students earn the degree of BSc Software Systems.
        </p>

        <p>
        SoSy is an applied area of computer science that focuses on teaching the
        skills to develop high-quality software.
        </p>
    
        <p>
        Developing software is the foundation of many careers in industry. Software
        is integrated into every area of our daily lives from web browsers to computer
        games. It runs in our cell phones, our cars and our transportation systems.
        </p>

        <p>
        SoSy is a practical, hands-on program delivered through lectures, team
        projects and a capstone project. Graduates have a solid understanding of
        the software development lifecycle from specification through development,
        verification and on into maintenance. They have experience writing larger
        scale software with a commitment to professional quality code construction.
        </p>
      </details>

      <article>
      </article>
    
      <details>
        <summary>What is the process for co-op?</summary>
        <article>
        The Computing Science co-op education program formally integrates academic
        study with relevant, paid work. Experience what it’s like to work at large
        companies such as SAP, EA, Broadcom, BlackBerry, Google and Samsung,
        or small-to-medium sized companies such as Avigilon, East Side Games,
        Simba and Mobify. There are few better ways to apply your classroom
        knowledge in a real-world setting.
        </article>
        <Link href={COOP_PAGE_LINK}><a style={{textDecoration: 'none'}}>
          Learn More About the Co-op Program
        </a></Link>
      </details>

      </section>
      <Footer />
    </div>
  )
}