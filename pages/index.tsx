import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type {NextPage} from "next";
import Feature from '../components/Feature.tsx';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import Page from '../components/Page';

export default function Home(): NextPage {
  return (
    <Page title='Welcome' description='Home'>
      <div className='container'>
        <main className={styles.main}>
          <Hero />
          <Feature />
        </main>
      </div>
    </Page>
  );
}


