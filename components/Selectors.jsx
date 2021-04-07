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
      <Select value={filter} onChange={updateFilter} placeholder='Show All'>
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
      <Flex justify='space-between' mt={5}>
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
    </Box>
  );
};

export default Selectors;