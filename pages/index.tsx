import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import Layout from "../components/layout";
import Projects from "../components/projects";
import About from "../components/about";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
    </Layout>
  );
};

export default Home;
