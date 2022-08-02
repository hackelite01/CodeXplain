import { createContext } from 'react';

const CodeContext = createContext({
  explanation: null,
  setExplanation: null,
  loading: false,
  setLoading: () => {},
});

export default CodeContext;
