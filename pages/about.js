import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
    <Layout title="About">
        <Link href="/">
            <a>Go to Home</a>
        </Link>
        <p>A Javascript Programmer</p>
        <img src="/static/javascipt-logo.png" alt="Javascript" height="200px" />
    </Layout>
)