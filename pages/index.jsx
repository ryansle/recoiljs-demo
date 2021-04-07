// Components
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import StateLifting from '../components/StateLifting';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em' mb='300px'>
        <Heading mb={5}>Using Recoil.js to Lift State Above the Component Tree</Heading>
        <StateLifting />
      </Box>
    </Box>
  );
};

export default Home;
