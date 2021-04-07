// Components
import { 
  Box, 
  Flex, 
  Text, 
  Button 
} from '@chakra-ui/react';

// Utilities
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box 
      width='full'
      pos='fixed'
      bg='gray.900'
      borderBottomWidth='1px'
      zIndex='4'
    >
      <Flex 
        justify='space-between' 
        align='center'
        p={[0, 6]}
      >
        <Box>
          <Text fontSize='xl' fontWeight='bold' onClick={() => router.push('/')}>
            RECOIL DEMO
          </Text>
        </Box>
        <Box>
          <Button colorScheme='teal' mr={5} onClick={() => router.push('/')}>
            Home
          </Button>
          <Button colorScheme='teal' onClick={() => router.push('/view-state')}>
            View State Elsewhere
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;