import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import HomePage from '../components/Sections/Home';
import Resume from '../components/Sections/Resume';
import { homePageMeta } from '../data/data';

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <HomePage />
      <About />
      <Resume />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
