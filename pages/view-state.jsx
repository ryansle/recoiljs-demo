// Components
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';

// Utilities
import { fields as fieldsState } from '../utils/atoms';
import { useRecoilValue } from 'recoil';

const ViewState = () => {
  const fields = useRecoilValue(fieldsState);

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em' mb='300px'>
        <Heading mb={5}>View Stored Recoil State</Heading>
        <Box 
          borderWidth='1px' 
          borderRadius={5} 
          p={5}
        >
          <Flex>
            <Box mr={5}>
              <Text fontSize='2xl' fontWeight='bold'>Email Address:</Text>
              <Text fontSize='2xl' fontWeight='bold'>Name:</Text>
              <Text fontSize='2xl' fontWeight='bold'>Phone Number:</Text>
              <Text fontSize='2xl' fontWeight='bold'>Favorite Color:</Text>
              <Text fontSize='2xl' fontWeight='bold'>Why?:</Text>
              <Text fontSize='2xl' fontWeight='bold'>Pin:</Text>
            </Box>
            <Box ml={5}>
              <Text fontSize='2xl'>{fields.email}</Text>
              <Text fontSize='2xl'>{fields.name}</Text>
              <Text fontSize='2xl'>{fields.phoneNumber}</Text>
              <Text fontSize='2xl'>{fields.favoriteColor}</Text>
              <Text fontSize='2xl'>{fields.whyFavorite}</Text>
              <Text fontSize='2xl'>{fields.pin}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewState;
