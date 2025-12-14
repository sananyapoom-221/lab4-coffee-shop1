const express = require('express');
const app = express();

// Middleware (ถ้ามี)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- จุดเปลี่ยนสำคัญ ---
// เรียกใช้ routes.js ที่เราเพิ่งสร้าง
require('./routes')(app); 
// --------------------

const PORT = 8081;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});