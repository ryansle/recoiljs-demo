import { useState } from 'react';

// Components
import { 
  Box, 
  Text,
  Code,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Image,
} from '@chakra-ui/react';
import Stepper from './Stepper/Stepper';
import StepperContent from '../components/StepperContent';

const StateLifting = () => {
  const [step, setStep] = useState(0);

  const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Review',
  ];

  return (
    <Box>
      <Text fontSize='xl' mb={5}>
        One of the primary uses of a state management library is to be able to store and update data across
        multiple pages without having to directly pass that data throughout the component tree. In this example,
        we have four sets of components making up our stepper (the three steps, along with a review page) that all
        share and update the same state, that we have stored inside what Recoil calls an "atom."
      </Text>
      <Text fontSize='xl' mb={5}>
        With Recoil, setting and accessing global state is as simple as can be. Rather than having to create a 
        complex set of actions and reducers, we can simply declare our atoms and use Recoil's <Code>useRecoilState()</Code>{' '}
        hooks, among others, in place of a <Code>useState()</Code> to access our global store.
      </Text>
      <Box p='2em'>
        <Stepper
          steps={steps}
          step={step}
          setStep={setStep}
          selected={step}
        >
          <StepperContent step={step} />
        </Stepper>
      </Box>
      <Box>
        <Text fontSize='xl' mb={5}>
          Recoil comes with a variety of hooks to access and update data efficiently within the store
          while still feeling React-ish. Here are some examples:
        </Text>
        <Table variant='simple' mb={5}>
          <Thead>
            <Tr>
              <Th>Hook</Th>
              <Th>Purpose</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Code>useRecoilValue()</Code>
              </Td>
              <Td>Read data directly out of the store without needing to update it.</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>useRecoilState()</Code>
              </Td>
              <Td>A replacement for <Code>useState()</Code> that allows you to read and update a state value in the store.</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>useSetRecoilState()</Code>
              </Td>
              <Td>For when you just want to be able to update a value in the store.</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>useResetRecoilState()</Code>
              </Td>
              <Td>Reset a provided Recoil state to its initial, default value.</Td>
            </Tr>
            <Tr></Tr>
          </Tbody>
        </Table>
        <Text fontSize='xl' mb={5}>
          Recoil works by lifting state above the component tree for storage instead of attempting to pass
          data through all the nodes of the tree into parent and grandchildren components far down the line.
          This diagram explains it better than I can:
        </Text>
        <Center>
          <Image 
            src='./diagram.jpg' 
            width='60%'
            borderRadius={15}
          />
        </Center>
      </Box>
    </Box>
  )
};

export default StateLifting;