exports.init = function (app) {

  app.get('/',
    app.middleware.render('index/index')
  );

  app.get('/basics',
    app.middleware.render('index/basics')
  );

  app.get('/mixins',
    app.middleware.render('index/mixins')
  );

  app.get('/profile',
    getUser,
    app.middleware.render('index/profile')
  );

};

function getUser(req, res, next) {
  // Here is where you could load a user from a JSON or a database
  var user = {
    name: 'David',
    level: 77,
    age: 20,
    color: 'rgb(236, 159, 159)',
    pictureURL: 'https://twimg0-a.akamaihd.net/profile_images/2438325557/Goofy_Profile_Pic.jpg',
    birthday: new Date(1990, 1, 22)
  };

  res.locals({ user: user });
  next();
};
