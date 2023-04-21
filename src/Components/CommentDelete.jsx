import { Button } from "@mui/material"
import { deleteComment } from "../api"

const CommentDelete = ({comment_id, isDeleted, setIsDeleted, setDeleteFailed, setShowDeleteSuccess}) => {

    const handleClick = () => {
        setIsDeleted(true)
        setShowDeleteSuccess(true)
        deleteComment(comment_id).then(() => {
        setDeleteFailed(false)
        setTimeout(() => {
            setShowDeleteSuccess(false)
        }, 3000)
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