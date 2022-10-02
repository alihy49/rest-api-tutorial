const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const userRelationshipSchema = new Schema({
    UserId: {type : Schema.Types.ObjectId, ref: 'User'},
    RelatedUserID: {type : Schema.Types.ObjectId, ref: 'User'},
    Type: String
});

const UserRelationship = mongoose.model('UserRelationship', userRelationshipSchema);

exports.addFriend = (relationshipData) => {
    const UserRelationship = new UserRelationship(relationshipData);
    return UserRelationship.save();
}