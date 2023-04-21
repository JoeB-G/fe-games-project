import { Button } from "@mui/material"
import { deleteComment } from "../api"

const CommentDelete = ({comment_id, isDeleted, setIsDeleted, setDeleteFailed}) => {

    const handleClick = () => {
        setIsDeleted(true)
        deleteComment(comment_id).then(() => {
            setDeleteFailed(false)
    })
    .catch((err) => {
        setIsDeleted(false)
        setDeleteFailed(true)
    })
}
    
    return <Button onClick={() => handleClick()} disabled={isDeleted} style={{maxWidth: 'fit-content'
}}>Delete</Button>
}

export default CommentDelete