import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './Country.module.css';

async function getCountry(id) {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const country = await res.json();
    return country;
}

export default function Country({ country }) {

    const [borders, setBorders] = useState([]);

    useEffect(()=>{
        getBorders();
    }, []);

    async function getBorders() {
        const borders = await Promise.all(
            country.borders.map((border) => getCountry(border))
        );
    
        setBorders(borders);
    }

    return (
        <Layout title={country.name}>
            <div className={styles.container}>

                {/* Overview */}
                <div className={styles.overview}>

                    {/* Flag */}
                    <div className={styles.flag}>
                        <img src={country.flag} alt={country.name}/>
                    </div>

                    {/* Name */}
                    <div className={styles.name}>{country.name}</div>

                    {/* alpha3Code */}
                    <div className={styles.code}>{country.alpha3Code}</div>
                    
                    <div className={styles.stats}>
                        <div className={styles.population_column}>
                            {/* Population value */}
                            <div className={styles.population}>{country.population}</div>

                            {/* Population label */}
                            <span className={styles.label}>Population</span>
                        </div>

                        <div className={styles.area_column}>
                            {/* Area value */}
                            <div className={styles.area}>{country.area}</div>

                            {/* Area label */}
                            <span className={styles.label}>Area</span>
                        </div>


                    </div>

                </div>

                {/* Details */}
                <div className={styles.details}>
                    <div className={styles.heading}>Details</div>

                    {/* Capital */}
                    <div className={styles.row}>
                        <div className={styles.label}>Capital</div>
                        <div className={styles.value}>{country.capital}</div>
                    </div>

                    {/* Subregion */}
                    <div className={styles.row}>
                        <div className={styles.label}>Subregion</div>
                        <div className={styles.value}>{country.subregion}</div>
                    </div>

                    {/* Languages */}
                    <div className={styles.row}>
                        <div className={styles.label}>Languages</div>
                        <div className={styles.value}>
                            {country.languages.map(({name}) => name).join(', ')}
                        </div>
                    </div>

                    {/* Currencies */}
                    <div className={styles.row}>
                        <div className={styles.label}>Currencies</div>
                        <div className={styles.value}>{country.currencies.map(({name}) => name).join(', ')}</div>
                    </div>

                    {/* Native name */}
                    <div className={styles.row}>
                        <div className={styles.label}>Native name</div>
                        <div className={styles.value}>{country.nativeName}</div>
                    </div>

                    {/* Gini */}
                    <div className={styles.row}>
                        <div className={styles.label}>Gini</div>
                        <div className={styles.value}>{country.gini}</div>
                    </div>

                    {/* Neighbouring country */}

                    <div className={styles.neighbour}>
                        <div className={styles.label}>Neighbouring country</div>
                        <div className={styles.neighbour_value}>
                            {borders.map(({ flag, name }) => (
                                <div className={styles.neighbours} key={name}>
                                    <img src={flag} alt={name} />

                                    <div className={styles.details_border_name} >{name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                  

                </div>
            </div>
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
