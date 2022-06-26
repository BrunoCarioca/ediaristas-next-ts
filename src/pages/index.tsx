import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'sorvete',
    },
  };
};

const index: NextPage = () => {
  return <div></div>;
};

export default index;
