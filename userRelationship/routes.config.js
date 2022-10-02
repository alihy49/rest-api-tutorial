const UserRelationshipController = require('./controllers/userRelationship.controller');

exports.routesConfig = function (app) {
    app.post('/addFriend', [
        UserRelationshipController.addFriend
    ]);
}