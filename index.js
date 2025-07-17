const express = require('express');


const dotenv = require('dotenv');
dotenv.config();  








const app = express();
const studentRoutes = require('./routers/students.routes');
const DB = require('./CONFIG/database');
DB(); 
const PORT = process.env.PORT || 3000;





app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/students', studentRoutes);
app.listen(PORT, () => {
  console.log(`its working on PORT ${PORT}`);
});
