import Head from 'next/head';

export default function Aidan() {
  return (
    <div className='container'>
      <Head>
        <title>Aidan Tiruvan's Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>I'm Aidan Tiruvan!</h1>
        <img
          className='pic'
          src='https://i.postimg.cc/nhQhm7WY/489400.jpg'
          alt='Aidan Tiruvan'
        />
        <p className='description'>
          Hi, my name's Aidan, and I'm a first-year Computer Science and Mathematics student at the University of Colorado Boulder. 
          I’m passionate about exploring computational theory and quantitative analysis, with a particular interest in creating 
          innovative solutions in robotics, machine learning, and data science for NASA and beyond. Some of my projects include 
          a 3D raycasting game engine written in Assembly and a robotics GUI for automating chemical synthesis. In my free time, 
          I enjoy delving into classics like Homer's <em>Iliad</em>, participating in math competitions, and working on my startup, 
          ModelBucket, which focuses on MLOps.
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

        .pic {
          height: 200px;
          width: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
          margin: 1rem 0;
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
