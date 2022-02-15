const readline = require('readline');
const inputs = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? \n', (answer) => {
  inputs.push(answer);

  rl.question('What is your favourite activity? \n', (answer) => {
    inputs.push(answer);

    rl.question('What do you listen to while doing that? \n', (answer) => {
      inputs.push(answer);

      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) \n', (answer) => {
        inputs.push(answer);

        rl.question('What\'s your favourite thing to eat for that meal? \n', (answer) => {
          inputs.push(answer);

          rl.question('Which sport is your absolute favourite? \n', (answer) => {
            inputs.push(answer);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer) => {
              console.log(`${inputs[0]} loves listening to ${inputs[2]} while ${inputs[1]}, devouring ${inputs[4]} for ${inputs[3]}, prefers ${inputs[5]} over any other sport, and is amazing at ${answer}. `);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});