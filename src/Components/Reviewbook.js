import { useState } from "react";
import axios from "axios";
function Review(){

    const [username, setUsername] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewbook, setReviewbook] = useState("");

    return(
    <section>
        <form onSubmit={(e)=>{e.preventDefault(); axios.post("http://localhost:1500/addReview",{ username,reviewContent,reviewbook })}}>
            <div>
                <label htmlFor="username">Name : </label>
                <input value={username} onChange={(e)=>{setUsername(e.target.value); console.log(username);}} id="username" type="text" placeholder="Your name here"/>
            </div>
            <div>
                <label htmlFor="reviewContent">Review : </label>
                <input value={reviewContent} onChange={(e)=>{setReviewContent(e.target.value); console.log(reviewContent);}} 
                id="reviewContent" type="text" placeholder="Your review here"/>

            </div>

            <div>
                <label htmlFor="reviewbook ">book  : </label>
                <input value={reviewbook} onChange={(e)=>{setReviewbook(e.target.value); console.log(reviewbook);}} 
                id="reviewbook" type="text" placeholder="Your review here"/>

            </div>
            <input type="submit" value="Submit Review"/>
        </form>
        </section>);
}

export default Reviewbook;