import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import {Component} from "react";

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/fikrifire19");
        const data = await res.json();

        return {user:data};
    }

    render() {
        const {user} = this.props;
        
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="me" height="200px" />
            </Layout>
        )
    }
}