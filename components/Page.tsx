import Head from 'next/head';

interface IProps{
  page: {
    title: String,
    description: String,
    children: any
  }
}
const Page: React.FC<IProps['page']> =({ children, title, description })=> {
  return (
    <>
      <Head>
        <title>Yousavie - {title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{children}</div>
    </>
  );
}

export default Page