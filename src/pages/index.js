
import Layout from '../components/Layout/Layout';
import CountriesTable from '../components/CountriesTable/CountriesTable';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      {/* Country counts */}
      <div className={styles.counts}>Country counts</div>

      {/* Search input */}
      <div className={styles.search}>Search Input</div>

      {/* Countries table component*/}
      <CountriesTable />
    </Layout>
  );
}
