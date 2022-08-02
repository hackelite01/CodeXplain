import React, { useState, useContext } from 'react';
import { Button, Stack, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import CodeContext from './context/CodeContext';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { showErrorToast } from '../lib/utils/toast';
import amplitude from 'amplitude-js';

import { getRandomCodeSnippet } from '../lib/utils/code';
import { track } from '../lib/utils/analytics';
import AIConfig from './Config';

const MAX_INPUT_LENGTH = 3500;
const INITIAL_EDITOR_VALUE = `function add(a, b) {\n  return a + b;\n}`;

const CodeInput = () => {
  const [code, setCode] = useState(INITIAL_EDITOR_VALUE);
  const [params, setParams] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { setExplanation, loading, setLoading } = useContext(CodeContext);

  const handleRandom = () => {
    const random = getRandomCodeSnippet();
    setCode(random);
  };

  const checkInputForErrors = (input) => {
    if (!input || input.length < 1) return true;
    if (input.length > MAX_INPUT_LENGTH) return true;

    return false;
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const hasError = checkInputForErrors(code);
      if (hasError) throw new Error('Please check your input.');
      const res = await fetch(`/api/code/explainCode`, {
        method: 'POST',
        body: JSON.stringify({ input: code, params }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const response = await res.json();
      console.log('response', response);
      if (!response || response.status !== 200) throw new Error(response.message || 'No response returned.');

      const {
        data: { error, choices },
      } = response;

      if (error) throw new Error(error);

      track('code: send code snippet', { code });
      setExplanation(choices);
    } catch (error) {
      showErrorToast(toast, error.message);
      console.log('error here', error);
      track('code: error sending code snippet', { code, error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack>
      <Stack
        w={{ base: 'full', lg: '50vw' }}
        rounded='md'
        bgColor='gray.700'
        p={4}
        _focus={{ border: 'none' }}
        position='relative'
        maxH='60vh'
      >
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          maxLength={MAX_INPUT_LENGTH}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          placeholder={INITIAL_EDITOR_VALUE}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: '1rem',
            minHeight: '100px',
          }}
        />
        <Button position='absolute' top={{ base: 0, md: 4 }} right={{ base: 0, md: 6 }} variant='ghost' size='xs' onClick={handleRandom}>
          Random
        </Button>
      </Stack>

      <AIConfig setParams={setParams} isOpen={isOpen} onClose={onClose} />

      <Button
        bgGradient='linear(to right,#b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
        animation='gradient-animation 10s ease infinite'
        w={{ base: 'full', md: 'auto' }}
        onClick={onSubmit}
        isLoading={loading}
        _hover={{}}
      >
        Explain this snippet
      </Button>
      <Button variant='ghost' size='xs' onClick={onOpen}>
        Config
      </Button>
    </VStack>
  );
};

export default CodeInput;
