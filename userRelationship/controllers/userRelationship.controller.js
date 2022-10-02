const UserRelationshipModel = require('../models/userRelationship.model');

exports.addFriend = (req, res) => {
    //**************set new Relationship values
    let newUserRelationshipModel = {
        UserId: req.body.userId,
        RelatedUserID: req.body.relatedUserId,
        type: 'friend'
    };
    //***************Save new Relationship
    UserRelationshipModel.addFriend(newUserRelationshipModel)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};