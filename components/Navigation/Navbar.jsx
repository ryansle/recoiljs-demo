// Components
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navbar = () => {
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
        <Link href='/'>
          <Text fontSize='xl' fontWeight='bold'>
            RECOIL DEMO
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;