import { useState } from 'react';
import '../CSS/Tweet.css';

function Tweet({ tweetId, content, likeCount, createdAt, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content); // Local state for input field

    const handleSave = () => {
        onEdit({
            id: tweetId,
            content: editedContent, // Use the updated content
            likeCount,
            createdAt
        });
        setIsEditing(false);
    };

    return (
        <div className='tweet-wrapper'>
            <div className='tweet-edit-wrapper'>
                <div className="tweet-content">
                    {isEditing ? (
                        <input
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)} // Update local state
                        />
                    ) : (
                        <span>{content}</span>
                    )}
                </div>
                <div className='edit-tweet'>
                    <button onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className='like-createdAt-wrapper'>
                <div className="likes">{likeCount} likes</div>
                <div className='created-at'>Tweeted at {createdAt}</div>
            </div>
        </div>
    );
}

export default Tweet;
