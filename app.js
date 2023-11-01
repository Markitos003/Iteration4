const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  const name = req.query.name; 
  const email = req.query.email; 
  res.render('index', { name: '', email: '' });
});

app.get('/index1', (req, res) => {
  const name = req.query.name; 
  const email = req.query.email; 
  res.render('index1', { name, email }); 
});

app.get('/index2', (req, res) => {
  const data = {
    name: 'Marcos',
    email: 'Marcos@example.com'
  };	
  res.render('index2', { data });
});

app.get('/index3', (req, res) => {
  res.render('index3');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
