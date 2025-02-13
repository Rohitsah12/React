
import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets=[
    {id:0,content:'We have a new twitter called as thraeds',likeCount:20,createdAt:new Date()},
    {id:1,content:'What should we post??', likeCount:30,createdAt:new Date()},
    {id:2,content:'what is up with tech community??',likeCount:40,createdAt:new Date()}
]


function Twitter(){
    const [tweets,setTweets]=useState(initialDummyTweets);
    const handleAddTweet=(text)=>{
        let nextId=(tweets.length>0)?tweets[tweets.length-1].id+1:0;
        setTweets([...tweets,
           {
            id:nextId,
            content:text,
            likeCount:Math.floor(Math.random()*10),
            createdAt:new Date()
           }
        ])
    }
    
    const handleEditTweet=(tweet)=>{
        setTweets(
            tweets.map((currentTweet)=>{
                if(currentTweet.id===tweet.id){
                    return tweet;
                }
                else{
                    currentTweet;
                }
            })
        )
    }

    const sortTweets=()=>{
        tweets.sort((t1,t2)=>t2.createdAt.getTime()-t1.createdAt.getTime());
        setTweets([...tweets]);
    }
    return(
        <div>
        <AddTweet onAddTweet={handleAddTweet} />
        <button onClick={sortTweets}>
            Sort Tweeet by CreatedAt
        </button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
        </div>
    )
}
export default Twitter;