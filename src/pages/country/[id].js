import Layout from '../../components/Layout/Layout';
import styles from './Country.module.css';

async function getCountry(id) {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const country = await res.json();
    return country;
}

export default function Country({ country }) {

    return (
        <Layout title={country.name}>

        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    const countries = await res.json();

    const paths = countries.map((country) => ({
        params: { id: country.alpha3Code }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const country = await getCountry(params.id);

    return {
        props: {
            country,
        }
    }
}
