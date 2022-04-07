export default function Tweet(props) {


    return (
        <div>
            <span>{props.author.name}</span>
            <p>{props.text}</p>

            <div>
                <span>{props.likes.length}</span>
                <button>Like</button>
            </div>
        </div>
    )
}