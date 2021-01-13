import styles from './SearchInput.module.css';
import { SearchRounded } from '@material-ui/icons';

export default function SearchInput({ ...rest }) {
    return (
        <div className={styles.wrapper}>
            <SearchRounded color="inherit"/>
            <input className={styles.input} type="text" {...rest} />
        </div>
    )
}
