import { useState } from 'react';

// Components
import { Box } from '@chakra-ui/react';
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
  )
};

export default StateLifting;