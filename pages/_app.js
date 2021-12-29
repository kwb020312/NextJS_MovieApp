import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, Props }) {
	return (
		<Layout>
			<Component {...Props} />
		</Layout>
	);
}
