// Components
import { Box } from '@chakra-ui/react';
import Step1 from '../components/StepperPages/Step1';
import Step2 from '../components/StepperPages/Step2';
import Step3 from '../components/StepperPages/Step3';
import Step4 from '../components/StepperPages/Step4';

const StepperContent = ({ step }) => {
  return (
    <Box>
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
      {step === 2 && <Step3 />}
      {step === 3 && <Step4 />}
    </Box>
  );
};

export default StepperContent;