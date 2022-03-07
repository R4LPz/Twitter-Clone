const Tweet = require('../models/tweet')


module.exports = {
    async create(req,res){
        const { text, image} = req.body
        const userId  = req.user

        const tweet = await Tweet.create({
            author: userId,
            text,
            image
        })

        return res.status(200).send(tweet)
    },
    
    async searchById(req,res){
        const {id} = req.params
        
        const tweet = await Tweet.findOne({_id: id})

        return tweet
        ? res.status(200).send(tweet)
        : res.status(404).send({"Error": "Tweet not found"})
    },

    async delete(req,res){
        const {id} = req.params

        const tweet = await Tweet.findOne({_id: id})

        if(!tweet)
            return res.status(404).send({"Error": "Tweet not found"})
        
        tweet.delete()

        return res.status(200).send({"Status": "OK", "id": tweet._id})
    },

    async edit(req,res){
        const { text, image } = req.body
        const { id } = req.params

        const tweet = await Tweet.findOne({_id: id})

        tweet.text = text ? text : tweet.text
        tweet.image = image ? image : tweet.image

        tweet.save()

        return res.status(200).send(tweet)
        
    },
    async like(req,res){
        const { id } = req.params
        const userId = req.user
        
        const tweet = await Tweet.findOne({_id: id})

        if(!tweet)
            return res.status(404).send({error: "Tweet not found"})
        
        const tweetLiked = tweet.likes.some(like => like == userId)

        if(tweetLiked){
            tweet.likes = tweet.likes.filter(like => like != userId)
        }else{
            tweet.likes.push(userId)
        }

        tweet.save()

        return res.status(200).send(tweet)
    }
}