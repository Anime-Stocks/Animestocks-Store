const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const routes = require('./Routes/routes');


app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
});
