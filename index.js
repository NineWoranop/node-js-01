const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send("This is a sample express app")
})

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      {
        id: "01",
        name: "User AAA"
      }, {
        id: "02",
        name: "User BBB"
      }
    ]

  })
})

// Listen on port 5000
app.listen(PORT, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});