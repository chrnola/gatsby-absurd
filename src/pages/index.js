import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Contact from '@sections/Contact';
import About from '@sections/About';
import Book from '@sections/Book';
import Bio from '@sections/Bio';
import Photos from '@sections/Photos';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Contact />
    <Book />
    <Bio />
    <Photos />
    <Footer />
  </Layout>
);

export default IndexPage;
