import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to About</a>
        </Link>
        <p>This is Homepage</p>
    </Layout>
);

export default Index;