import { fetchOne } from '../../services/fetcher'
import Layout from '../../components/layout'


const SnackDetail = ({ snack }) => (

    <Layout>
        <h2>{snack && snack.name}</h2>
        <p>{snack && snack.description}</p>
    </Layout>
)

export default SnackDetail;

export async function getServerSideProps(context) {

    const id = context.query.id;

    const snack = await fetchOne(id);

    return {
        props: {
            snack,
        },
    }
}

