const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
//Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let num1 = Number(req.body.Num1);
  let num2 = Number(req.body.Num2);

  let result = num1 + num2;

  res.send(`Your answer is ${result}`);
});

//BMI calculator
app.get('/bmicalculator', (req, res )=> {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {

  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});