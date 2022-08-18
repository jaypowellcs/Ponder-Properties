import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    city: String,
    state: String,
    bedrooms: Number,
    bathrooms: Number,
    sqft: Number,
    purchasePrice: Number,
    file: String,
    message: String,
    likes: {
        type: [Array],
        default: [],
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 