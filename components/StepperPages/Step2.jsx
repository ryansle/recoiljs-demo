// Components
import { 
  Box, 
  Heading, 
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from '@chakra-ui/react';

const Step2 = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  return (
    <Box px='5em'>
      <Heading mb={5}>Step 2</Heading>
      <FormControl id='favoriteColor' mb={5} isRequired>
        <FormLabel>Favorite Color</FormLabel>
        <Select placeholder='Select option'>
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl id='whyFavorite' mb={5} isRequired>
        <FormLabel>Why is this your favorite color?</FormLabel>
        <Textarea placeholder='Select option' />
      </FormControl>
    </Box>
  )
};

export default Step2;