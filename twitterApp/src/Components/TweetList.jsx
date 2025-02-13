import Tweet from "./Tweet";
import '../CSS/TweetList.css';

export default function TweetList({ tweets, onEditTweet }) {
    return (
        <ul className="tweetList">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <Tweet 
                            tweetId={tweet.id} 
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            createdAt={String(tweet.createdAt)} 
                            onEdit={onEditTweet} 
                        />
                    </li>
                ))
            }
        </ul>
    );
}
