# MessageBoard

Odin Project: message board 

https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board

# Implementation 

The `view` folder contains each individual page, including `index` (the home page), `form` (to submit a new message), `details` (individual message detail display), and `404` (for page not found error). 

`public` contains any images or css styling, if applicable. 

`app` uses Express to serve pages, and uses EJS as the view engine. The `app.get` serves each page to the user. 

- `req` represents the HTTP request object 
- `res` is the response object used to send a response to the client 
- `app.get` defines a route for handling GET requests to a specific path 
- `app.post` defines a route for handling POST requests to a specific path 
- `app.use(middleware)` registers a middleware function that can process requests for all routes or a specific path 
- `app.listen` starts the server and listens for incoming requests on the specified port 
- `express.static` is a middleware function that serves staic files from the specified directory 
- `express.urlencoded` is a middleware function that parses incoming request bodies with URL-encoded data 
- `res.render` renders a view template and sends the generated HTML to the client 
- `res.status` sets the HTTP status code for the response 
- `res.redirect` redirects the client to a different URL 

EJS (Embedded JavaScript) is a templating engine for rendering HTML with JavaScript. It allows you to embed JS code within HTML to create dynamic views. 
