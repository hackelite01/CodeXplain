// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require('openai');
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const MAX_TOKENS = 3500;

/**
 * Function to convert string to float value
 * @param {string} a
 * @returns {float}
 */
const convert_to_float = (a) => {
  // Type conversion
  // of string to float
  var floatValue = +a;

  // Return float value
  return floatValue;
};

/**
 * Requests OpenAI API to get a code explanation
 * @param {string} code
 * @returns explanation for code
 */
const getExplanationFromOpenAI = async (code, params) => {
  const configuration = new Configuration({
    apiKey: OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const codeWithPrompt = `${code}n"""\nHere\'s what the above class is doing:\n1.`;

  if (codeWithPrompt.length > MAX_TOKENS) throw new Error('Code block too long (max. 1000 characters).');

  const response = await openai.createCompletion('text-davinci-002', {
    prompt: codeWithPrompt,
    temperature: convert_to_float(params?.temperature) || 1,
    max_tokens: MAX_TOKENS,
    top_p: 1.0,
    frequency_penalty: convert_to_float(params?.frequencyPenalty) || 0.0,
    presence_penalty: convert_to_float(params?.presencePenalty) || 0.0,
    stop: ['"""'],
  });
  console.log('response', response);

  const { data } = response;

  return data;
};

export default async function handler(req, res) {
  try {
    const {
      body: { input, params },
    } = req;
    const explanation = await getExplanationFromOpenAI(input, params);

    if (!explanation) throw new Error('No response from OpenAI.');

    res.send({
      status: 200,
      data: explanation,
    });
  } catch (error) {
    console.log('error', error.response.data);
    res.send({ status: 500, message: error.message });
  }
}
