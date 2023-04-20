import { Button } from "@mui/material"
import { deleteComment } from "../api"

const CommentDelete = ({comment_id, isDeleted, setIsDeleted}) => {

    const handleClick = () => {
        deleteComment(comment_id).then(() => {
            setIsDeleted(true)
    })
    .catch(() => {
        setIsDeleted(false)
    })
}
    
    return <Button onClick={() => handleClick()} disabled={isDeleted} style={{maxWidth: 'fit-content'
}}>Delete</Button>
}

export default CommentDelete