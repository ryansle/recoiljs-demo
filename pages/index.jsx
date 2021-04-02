// Components
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import StateLifting from '../components/StateLifting';

// Utilities
import Head from 'next/head';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em' mb='300px'>
        <Head>
          <title>Recoil.js Demo</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Heading>Using Recoil.js to Lift State Above the Component Tree</Heading>
        <StateLifting />
      </Box>
    </Box>
  );
};

export default Home;
