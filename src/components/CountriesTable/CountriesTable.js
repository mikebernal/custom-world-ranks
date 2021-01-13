import { useState } from 'react';
import Link from 'next/link';
import styles from './CountriesTable.module.css';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'; 
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'; 

function orderBy(countries, value, direction) {
    if (direction === 'asc') {
        return [...countries].sort((a, b) => 
            (a[value] > b[value] ? 1 : -1)
        );
    }

    if (direction === 'desc') {
        return [...countries].sort((a, b) => 
            (a[value] > b[value] ? -11 : 1)
        );
    }

    return countries;
}

function SortArrow({ direction }) {
    if (!direction) {
        return <></>;
    }

    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRounded color="inherit" />
            </div>
        );
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded color="inherit" />
            </div>
        );
    }
}

export default function CountriesTable({ countries }) {
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedCountries = orderBy(countries, value, direction);

    function switchDirection() {
        if (!direction) {
            setDirection('desc');
        } else if (direction === 'desc') {
            setDirection('asc');
        } else {
            setDirection(null);
        }
    };

    function setValueAndDirection(value) {
        switchDirection();
        setValue(value);
    }

    return (
        <div className={styles.countries_table}>
            {/* Countries table heading */}
            <div className={styles.heading}>

       

                {/* Name */}
                <button className={styles.heading_label} onClick={() => setValueAndDirection('name')}>
                    <span>Country</span>
                    { value ===' name' && <SortArrow direction={direction} /> }
                </button>
                
                {/* Population */}
                <button className={styles.heading_label} onClick={() => setValueAndDirection('population')}>
                    <span>Population</span>
                    { value === 'population' && <SortArrow direction={direction} /> }
                </button>

                {/* Area */}
                <button className={styles.heading_label} onClick={() => setValueAndDirection('area')}>
                    <span>Area</span>
                    { value === 'area' && <SortArrow direction={direction} /> }
                </button>

                {/* Gini */}
                <button className={styles.heading_label} onClick={() => setValueAndDirection('gini')}>
                    <span>Gini</span>
                    { value === 'gini' && <SortArrow direction={direction} /> }
                </button>
            </div>

            {/* Countries table body */}

            {
                orderedCountries.map((country) => (
                    <Link href={`/country/${country.alpha3Code}`} key={country.name}>
                        <div className={styles.body}>

                            {/* Flag */}
                            <div className={styles.flag}>
                                <img src={country.flag} alt={country.name}/>
                            </div>

                            {/* Name */}
                            <div className={styles.name}>{country.name}</div>

                            {/* Population */}
                            <div className={styles.population}>{country.population}</div>

                            {/* Area */}
                            <div className={styles.area}>{country.area}</div>

                            {/* Gini */}
                            <div className={styles.gini}>{country.gini  || 0} %</div>

                        </div>
                    </Link>
                ))
            }
        
        </div>
    )
}
