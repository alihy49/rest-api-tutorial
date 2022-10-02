const UserRelationshipModel = require('../models/userRelationship.model');
//***********Add new Friend
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
//************ Delete a Friend
exports.deleteFriendById = (req, res) => {
    UserRelationshipModel.deleteFriendById(req.params.userId, req.body.relatedUserId)
        .then((result)=>{
            res.status(204).send({});
        });
};