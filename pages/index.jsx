// Components
import { Box, Heading, Divider } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import StateLifting from '../components/StateLifting';
import Selectors from '../components/Selectors';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em' mb='300px'>
        <Heading mb={5}>Using Recoil.js to Lift State Above the Component Tree</Heading>
        <StateLifting />
        <Divider my='100px' />
        <Heading mb={5}>Selectors Let You Build Dynamic Data that Depends on Other Data</Heading>
        <Selectors />
      </Box>
    </Box>
  );
};

export default Home;
