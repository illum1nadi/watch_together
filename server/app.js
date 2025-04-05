//Importing the necessary.
const express = require('express');
const app = express();

//The middleware required to actually process the incoming and outgoing json.
app.use(express.json());

app.post('/', (req, res) => {
  res.json({
    mes : "hello there"
  });
})

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

module.exports = app;