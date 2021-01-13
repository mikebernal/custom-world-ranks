import Layout from '../components/Layout/Layout';
import CountriesTable from '../components/CountriesTable/CountriesTable';

import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput/SearchInput';

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.input_container}>
        {/* Country counts */}
        <div className={styles.counts}>Found {countries.length} countries</div>

        {/* Search input */}
        <div className={styles.input}>
          <SearchInput placeholder="Search by country name, region, or subregion" />
        </div>
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
