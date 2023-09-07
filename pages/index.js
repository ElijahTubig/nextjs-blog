import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Jose Elijah Tubig, and I'm delighted to tell you a little bit about myself. As a dedicated IT student, I'm always fascinated by the digital world and its limitless possibilities.When I'm not studying, you can find me diving headfirst into the world of video games. Gaming is my ultimate escape and source of creativity, from immersive RPGs to fast-paced shooters.My heart beats in time with OPM. Filipino music's soulful melodies and relatable lyrics speak to me deeply, evoking feelings of nostalgia and pride.Burgers are my all-time favorite comfort food. I can't get enough of the combination of juicy patties, crisp vegetables, and flavorful sauces.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}