import { useState } from "react"

export default function AddTweet({onAddTweet}){
    const [text,setText]=useState('');
    return(
        <>
            <input 
                placeholder="Add new Tweet...."
                value={text}
                onChange={()=>setText(event.target.value)}
            />
            <button onClick={()=>{
                onAddTweet(text)
                setText('');
                
            }}>
                Tweet !!
            </button>
        </>
    )
}