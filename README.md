Examples
========

Here are a couple examples to teach you how to use jade, stylus and commonJS.

###To install the app:

    make install

###To run the app:

    make run

Go to http://localhost:3000.

## Where files go

###Any javascript
put them inside client/  
require them inside client/main.js

###Any Javascript libraries
put them inside public/js/lib/

###Any javascript you want to be able to load from a jade file
put them inside client/requires/

###Any Jade files
put them inside views/

###Any Jade files you want to render after page load (like a handlebars template)
put them inside views/public/

###Any Styles
put them inside public/styl/
import them inside public/styl/main.styl

###All the controllers
put them inside controllers/

###All the middleware
put them inside middleware/

###All the models
put them inside models/
