# InstaBrew

InstaBrew is a Fullstack Web App that lets you discover and share AeroPress coffee recipes. Users are able to create accounts using their email and password, explore recipes posted by other users, post comments on individual posts, and create their own posts. Please feel free to sign in as a guest using the "Sign in as a guest" button on the login page.

**Link to project:** https://instabrew.fly.dev/

<img src="https://i.ibb.co/m4BGRNp/instabrew-Demo.png" width=550>

## How It's Made:

**Tech used:** MongoDB, MongooseJS, Node.js, Express, EJS, Tailwind CSS, DaisyUI, PassportJS

This project uses the Model–view–controller (MVC) architecture to organize the project into clear folder structures for easier maintainability. MongoDB is used for the database, together with Mongoose for modeling the app data. Mongoose is used to create schemas for each user's Posts, Comments, and User Profile (username, email, and password). User passwords are secured and hashed using the bcrypt library before being stored into the database.

The controller logic is written in JavaScript using Node.js and Express. The routes are separated into different groups: one group for the home pages, another for the user comments, and another for the user posts. A middleware package for Node.js called PassportJS is used to implement authentication and authorization. Using what PassportJS refers to as 'strategies', I was able to authenticate a username and password pair for each user. The email and password pair is validated and sanitized using a library called Validator. Once signed in, users can create posts with images. Image uploads are handled using a middleware package called Multer. Uploaded files are filtered so that only certain file types are permitted and are then saved to disk storage temporarily. The image is uploaded to Cloudinary, which returns a URL. Lastly, I attach this image URL to the post and store it in the database.

After processing the user's request in the controller, data is then sent off to the view. Here, HTML pages are processed and rendered using a templating language called EJS and sent back to the user. The styling for the HTML pages was done using Tailwind CSS, a CSS utility framework, and DaisyUI, a bootstrap-like component library built on top of Tailwind.

## Optimizations

One of the steps that I took that made a huge difference in the loading speed of the web app is optimizing the image assets using Cloudinary. This allowed me to deliver next-gen image formats like WebP and AVIF, keeping the size of most pages below 100 Kilobytes. Another step that made a big difference was switching hosting providers. Using fly.io allowed my app to load instantly instead of previously waiting a few seconds.

In the next update, I would like to transform and optimize each user's image before storing them using Cloudinary's API.

## Lessons Learned:

Debugging.

Since this is a Fullstack Application, there were many areas in the code that needed to be wired together. Specifically, all of the backend code needed to seemlessly interact with the frontend code, and this can be a tricky process at times if you're not careful. One valuable skill that I learned from building fullstack apps is debugging. I learned how important it is to log data to the console as you're writing out your code. This helps because it allows you to verify that the code you write returns what you _think_ it will return. Counterintuitively, console logging also saves time because it lets you catch the bug in real time, and prevents you from wasting hours hunting down an elusive bug in your codebase later on.

## Other Projects:

Check out these other projects in my portfolio:

**Slick's Slices:** https://github.com/anthonypz/slicks-slices

**Contactr:** https://github.com/anthonypz/contactr

**Countrybase:** https://github.com/anthonypz/Countrybase

**Pomo:** https://github.com/anthonypz/Pomo
