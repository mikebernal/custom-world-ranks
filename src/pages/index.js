import Layout from '../components/Layout/Layout';
import CountriesTable from '../components/CountriesTable/CountriesTable';

import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.search}>
        {/* Country counts */}
        <div className={styles.search_counts}>Found {countries.length} countries</div>

        {/* Search input */}
        <div className={styles.search_input}>Search Input</div>
      </div>

      {/* Countries table component*/}
      <CountriesTable countries={countries} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();

  return {
    props: {
      countries,
    }
  }
}
