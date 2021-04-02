// Components
import { 
  Box, 
  Heading, 
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const Step1 = () => {
  return (
    <Box px='5em'>
      <Heading mb={5}>Step 1</Heading>
      <Flex justify='space-between'>
        <Box width={['100%', '45%']}>
          <FormControl id='email' mb={5} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input placeholder='Email Address' />
            <FormHelperText>We'll never share your email address.</FormHelperText>
          </FormControl>

          <FormControl id='name' mb={5} isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Name' />
            <FormHelperText>What should we call you?</FormHelperText>
          </FormControl>

        </Box>
        <Box width={['100%', '45%']}>
          <FormControl id='phoneNumber' isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder='Email Address' />
            <FormHelperText>For us to send you reminders. You can opt out of this later.</FormHelperText>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  )
};

export default Step1;