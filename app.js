const express = require("express"); 
const app = express(); 
const path = require('path'); 

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// Set view engine to ejs
app.set('view engine', 'ejs'); 

// Serve static files like CSS, images, etc. 
app.use(express.static(path.join(__dirname, 'public'))); 

// Middleware to parse form data 
app.use(express.urlencoded({ extended: true }));

// Serve home page 
app.get('/', (req, res) => {
    res.render('index', 
        { title: "Mini Messageboard", messages : messages }
    ); 
}); 

// Serve message details page 
app.get('/message/:id', (req, res) => {
    const messageId = parseInt(req.params.id); 

    if (messages[messageId]) {
        res.render('details', { title: "Message Details", message: messages[messageId] }); 
    } else {
        res.status(404).render('404'); 
    }
}); 

// Serve new message 
app.get('/new', (req, res) => {
    res.render('form', { title: "Add a New Message" }); 
})

// Handle POST request to add a new message 
app.post('/new', (req, res) => {
    const { user, message } = req.body; 

    if (user && message) {
        messages.push({ text: message, user: user, added: new Date() }); 
    }

    // Redirect to home page 
    res.redirect('/'); 
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

