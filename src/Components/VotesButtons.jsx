import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";
import {useState} from "react"


const VotesButtons = ({id, dataObject, setDataObject, patchFunction }) => {
  const [err, setErr] = useState(null)
  
    const handleClick = (num) => {
      setDataObject({...dataObject, votes: (dataObject.votes + num)})
      patchFunction(id, num).catch(() => {
        setDataObject({...dataObject, votes: (dataObject.votes - num)})
        setErr('Something went wrong, please try again.')
      })
  };

  return (
    <div>
      <IconButton onClick={() => handleClick(1)}>
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
      <Button size="medium" disabled>
      {err ? <p>{err}</p> : null}
        {dataObject.votes}
      </Button>
      <IconButton onClick={() => handleClick(-1)}>
        <KeyboardDoubleArrowDownIcon />
      </IconButton>
    </div>
  );
};

export default VotesButtons;
