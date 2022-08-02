import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { track } from '../lib/utils/analytics';

const Config = ({ params, setParams, isOpen, onClose }) => {
  const handleSetParams = (key, value) => {
    const newParams = {
      ...params,
      [key]: value,
    };
    setParams(newParams);
    track('params: set new model config', { config: newParams });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor='blackAlpha.700' backdropFilter='auto' backdropBlur='5px' />
        <ModalContent bgColor='gray.700' color='white'>
          <ModalHeader>Model Configuration</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Stack>
              <FormControl>
                <Tooltip
                  label='Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become
                deterministic and repetitive. (source: OpenAI)'
                  bgColor='gray.800'
                  hasArrow
                  placement='auto-start'
                >
                  <FormLabel htmlFor='amount'>Temperature</FormLabel>
                </Tooltip>
                <NumberInput
                  max={1}
                  min={0}
                  step={0.1}
                  onChange={(value) => handleSetParams('temperature', value)}
                  defaultValue={1.0}
                  value={params?.temperature}
                >
                  <NumberInputField id='amount' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <Tooltip
                  label="How much to penalize new tokens
                based on their existing frequency in the
                text so far. Decreases the model's
                likelihood to repeat the same line
                verbatim. (source: OpenAI)"
                  bgColor='gray.800'
                  hasArrow
                  placement='auto-start'
                >
                  <FormLabel htmlFor='amount'>Frequency penalty</FormLabel>
                </Tooltip>
                <NumberInput
                  max={2}
                  min={0}
                  step={0.1}
                  onChange={(value) => handleSetParams('frequencyPenalty', value)}
                  defaultValue={params?.frequencyPenalty || 0}
                  value={params?.frequencyPenalty}
                >
                  <NumberInputField id='amount' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <Tooltip
                  label="How much to penalize new tokens
                  based on whether they appear in the
                  text so far. Increases the model's
                  likelihood to talk about new topics. (source: OpenAI)"
                  bgColor='gray.800'
                  hasArrow
                  placement='auto-start'
                >
                  <FormLabel htmlFor='amount'>Presence penalty</FormLabel>
                </Tooltip>
                <NumberInput
                  max={2}
                  min={0}
                  step={0.1}
                  onChange={(value) => handleSetParams('presencePenalty', value)}
                  defaultValue={params?.presencePenalty || 0}
                  value={params?.presencePenalty}
                >
                  <NumberInputField id='amount' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Config;
