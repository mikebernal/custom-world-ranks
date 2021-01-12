import Layout from '../../components/Layout/Layout';
import styles from './Country.modules.css';
import Layout from '../../components/Layout/Layout';

export default function Component({ country }) {

    return (
        <Layout title={country.title} >

        </Layout>
    )
}

export async function getStaticPaths() {

}

export async function getStaticProps() {

}
