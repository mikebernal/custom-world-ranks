import { useState } from 'react';
import Link from 'next/link';
import styles from './CountriesTable.module.css';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'; 
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'; 

export default function CountriesTable({ countries }) {
    const [direction, setDirection] = useState();

    function SortArrow({direction}) {
        if (!direction) {
            return <></>;
        }

        if (direction === 'desc') {
            return (
                <div className={styles.heading_arrow}>
                    <KeyboardArrowDownRounded color="inherit"/>
                </div>
            );
        } else {
            return (
                <div className={styles.heading_arrow}>
                    <KeyboardArrowUpRounded color="inherit"/>
                </div>
            );
        }
    }

    return (
        <div className={styles.countries_table}>
            {/* Countries table heading */}
            <div className={styles.heading}>

       

                {/* Name */}
                <button className={styles.heading_label}>
                    <span>Country</span>
                    <SortArrow direction={direction}/>
                </button>
                
                {/* Population */}
                <button className={styles.heading_label}>
                    <span>Population</span>
                    <SortArrow direction={direction}/>
                </button>

                {/* Area */}
                <button className={styles.heading_label}>
                    <span>Area</span>
                    <SortArrow direction={direction}/>
                </button>

                {/* Gini */}
                <button className={styles.heading_label}>
                    <span>Gini</span>
                    <SortArrow direction={direction}/>
                </button>
            </div>

            {/* Countries table body */}

            {
                countries.map((country) => (
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
