import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import SearchInput from '../components/SearchInput/SearchInput';

import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter((country)=>(
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  ));

  function onInputChange(e) {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className={styles.input_container}>
        {/* Country counts */}
        <div className={styles.counts}>Found {countries.length} countries</div>

        {/* Search input */}
        <div className={styles.input}>
          <SearchInput placeholder="Search by country name, region, or subregion" onChange={onInputChange}/>
        </div>
      </div>

      {/* Countries table component*/}
      <CountriesTable countries={filteredCountries} />
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
