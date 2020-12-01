import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Contact from '@sections/Contact';
import About from '@sections/About';
import Book from '@sections/Book';
import Bio from '@sections/Bio';
import Pics from '@sections/Pics';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Contact />
    <Book />
    <Bio />
    <Pics />
    <Footer />
  </Layout>
);

export default IndexPage;
