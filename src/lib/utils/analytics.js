import amplitude from 'amplitude-js';
import { detect } from 'detect-browser';

const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_KEY;
const env = process.env.NODE_ENV;

const initAnalytics = () => {
  console.log('[Init Analytics]');
  amplitude.getInstance().init(apiKey || '');
};

const track = (name, props = {}) => {
  console.log('name, props', name, props);
  const browser = detect();
  console.log('browser', browser);

  const updatedProps = {
    ...props,
    browser: browser && browser.name ? browser.name.toLowerCase() : 'unknown',
  };

  if (env === 'production') {
    amplitude.getInstance().logEvent(name, updatedProps);
  } else {
    // eslint-disable-next-line no-console
    console.info(`[${env}] Logging event to Amplitude`, { name, props: updatedProps });
  }
};

export { initAnalytics, track };
