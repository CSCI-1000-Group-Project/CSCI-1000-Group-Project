import Head from 'next/head';

export default function Aditya() {
  return (
    <div className='container'>
      <Head>
        <title>Aditya's Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>I'm Aditya!</h1>

        <p className='description'>
          Hi, my name is Aditya, and I am from Boulder. I am currently a freshman studying Computer Science. 
          My programming language of choice is Java, as I have worked with it in the past. However, I am eager 
          to learn more languages throughout my college career. I am also exploring various fields in computer science, 
          and cybersecurity is one of my main interests so far, though I am still considering all my options.
        </p>

        <a className='button' href='/'>
          <p>Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }

        .button {
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
