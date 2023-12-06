import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    window.location.href = '/docs/whitepaper/arithfi';
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Docs">
      <main>
      </main>
    </Layout>
  );
}
