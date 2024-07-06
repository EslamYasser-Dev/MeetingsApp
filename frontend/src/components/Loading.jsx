
  const Loading = props => {
    const {color, pros}= props;
  return (
    pros ? <span className={`loading loading-dots loading-md ${color}`}></span> : <progress className="progress w-56"></progress>} 
   
  )
}

export default Loading; 