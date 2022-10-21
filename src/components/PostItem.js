import axios from 'axios'

const PostItem = ({post}) => {

        
    const handleClick = async (e) => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
        
        console.log(data.data.title)
    }


    return(
        <div onClick={handleClick} className="listItem" id={post.id} >
            <h1 id={post.id}>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

