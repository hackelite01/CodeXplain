// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: { variants: { gradient: { bgGradient: 'linear(to-l, #FF8888,#948BFF)', bgClip: 'text' } } },

    Link: {
      baseStyle: {
        bgGradient: 'linear(to-l, #FF8888,#948BFF)',
        bgClip: 'text',
      },
    },
    Button: {
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        ghost: {
          _hover: {
            bgColor: 'pink.400',
          },
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
});

export default theme;
