import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          &copy; 2022 YouTube Downloader, 
          <Link href='/'>
            <a className='hover:underline'>
            &nbsp; Yousavie  &nbsp;
            </a>
          </Link>
          made with ❤ by <a href="https://ifeanyilucky.vercel.app" target="_blank" rel="noreferrer"/>Codack</a> . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href="/">
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Privacy
            </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
            </Link>
          </li>
          
        </ul>
      </footer>
    </>
  );
}

export default MyApp;
