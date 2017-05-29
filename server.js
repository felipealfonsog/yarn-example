const express = require('express');
const port processs.env.PORT || 3000 ;
let app = express();

app.get('/'), (req, res) => {
 res.send('yarn project.');
});

app.listen(port, () => {
  console.log('server is up on port ${port}!');
});
