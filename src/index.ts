import express, { Router } from "express";
import Email_Route from "./services/email_Service"
import user_Router from "./route/user.js"

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/v1',Email_Route);
app.use('/api/v1',user_Router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
