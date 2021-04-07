// Components
import { 
  Box, 
  Text,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Code,
} from '@chakra-ui/react';

// Utilities
import { attendeeFilterState, filteredAttendeeListState, attendeeListStatsState } from '../utils/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

const TableRow = ({ name, email, status }) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{status}</Td>
    </Tr>
  );
};

const Selectors = () => {
  const [filter, setFilter] = useRecoilState(attendeeFilterState);
  const attendeeList = useRecoilValue(filteredAttendeeListState);
  const {
    totalInvitees, 
    numAttending,
    numNotAttending,
    percentageAttending,
    percentageNotAttending
  } = useRecoilValue(attendeeListStatsState);

  const updateFilter = ({ target: { value }}) => {
    setFilter(value);
  };

  return (
    <Box>
      <Text fontSize='xl' mb={5}>
        Recoil also provides us a utility called a <b>selector</b> which just represents a piece of derived
        state. This kind of derived state allows us to build dynamic data that depends on other data. For example,
        let's say we have a table of information that we want to be able to filter accordingly.
      </Text>
      <Text fontSize='xl' mb={5}>
        Granted, this example is entirely possible without Recoil. Recoil will just help to clean up the code a bit
        and make it easier to read and sift through. Without Recoil, we could create a bunch of separate states and{' '}
        <Code>useEffects</Code> to filter our data and store it all in separate containers as a user navigates our
        application.
      </Text>
      <Text fontSize='xl' mb={5}>
        Instead, Recoil will allow us to contain this data within one selector, that ties back to one atom, and can
        dispatch an action to filter that original atom's data accordingly for use within our table. This will make
        more sense once we walk through the code. For now, take a look:
      </Text>

      <Select 
        value={filter} 
        onChange={updateFilter} 
        placeholder='Show All'
        mb={5}
      >
        <option value='Show Attending'>Show Attending</option>
        <option value='Show Not Attending'>Show Not Attending</option>
      </Select>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email Address</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {attendeeList.map((attendee, index) => (
            <TableRow
              key={index}
              name={attendee.name}
              email={attendee.email}
              status={attendee.status}
            />
          ))}
        </Tbody>
      </Table>
      <Flex justify='space-between' my={5}>
        <Stat>
          <StatLabel>Total Invitees</StatLabel>
          <StatNumber>{totalInvitees}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Number Attending</StatLabel>
          <StatNumber>{numAttending}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Number Not Attending</StatLabel>
          <StatNumber>{numNotAttending}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Percentage Attending</StatLabel>
          <StatNumber>{percentageAttending.toFixed(2) * 100}%</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Percentage Not Attending</StatLabel>
          <StatNumber>{percentageNotAttending.toFixed(2) * 100}%</StatNumber>
        </Stat>
      </Flex>

      <Text fontSize='xl' mb={5}>
        We can also use Recoil's selector syntax to implement statistics regarding our pertinent data with ease,
        as shown above.
      </Text>
    </Box>
  );
};

export default Selectors;