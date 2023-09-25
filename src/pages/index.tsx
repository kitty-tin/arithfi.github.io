import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    // redirect to /docs/category/overview
    window.location.href = '/docs/category/overview';
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
