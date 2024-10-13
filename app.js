const express = require("express"); 
const app = express(); 
const path = require('path'); 

// Set view engine to ejs
app.set('view engine', 'ejs'); 

// Serve static files like CSS, images, etc. 
app.use(express.static(path.join(__dirname, 'public'))); 

// Serve home page 
app.get('/', (req, res) => {
    res.render('index'); 
}); 

// Serve 404 page for any unknown route 
app.use((req, res) => {
    res.status(404).render('404'); 
}); 

// Start server 
const PORT = 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
}); 
