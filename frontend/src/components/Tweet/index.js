import { Author, Container, Actions } from "./styles";
import like from "../../assets/like.svg"
export default function Tweet(props) {


    return (
        <Container>
            <Author>{props.author.name}</Author>
            <p>{props.text}</p>

            <Actions>
                
                <button onClick={()=>props.onLike(props.tweetId)}>
                    <img src={like} alt="" />
                    <span>{props.likes.length}</span>
                </button>
            </Actions>
        </Container>
    )
}