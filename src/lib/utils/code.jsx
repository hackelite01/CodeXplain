const SNIPPETS = [
  'const factorial = number => {\n' +
    '\tlet product = 1;\n' +
    '\tfor (let i = 2; i <= number; i++) {\n' +
    '\tproduct *= i;\n' +
    '\t}\n' +
    '\treturn product;\n' +
    '};',
  'const factorial = number => {\n' + '\treturn number < 2 ? 1 : number * factorial(number - 1);\n' + '};',
  "const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();",
  'const rgbToHex = (r, g, b) =>\n' + "'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n" + 'rgbToHex(0, 51, 255); ',
  'const copyToClipboard = (text) => navigator.clipboard.writeText(text);',
  'const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());',
  'const dayOfYear = (date) => \n' + 'Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24;',
];

export const getRandomCodeSnippet = () => {
  return SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
};
