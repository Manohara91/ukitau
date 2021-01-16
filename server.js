const cors = require("cors");
//SET PORT
const PORT = process.env.PORT || 8005;
const corsOptions = {
  origin: `http://localhost:${PORT}`,
};
const app = require("./app/app");
app.use(cors(corsOptions));

//LISTEN FOR REQUESTS
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
