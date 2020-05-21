const greetings = require('../lib/greetings');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
      const greeting = greetings[Math.floor(Math.random() * greetings.length)];
      context.res.status(200).json(greeting);

    } catch (error) {
      context.res.status(500).send(error);

    }

};
