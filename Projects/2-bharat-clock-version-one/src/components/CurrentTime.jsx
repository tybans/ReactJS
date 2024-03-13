let CurrentTime = () => {

  let time = new Date();
  return(
    <>
      <p className="lead">This is the Current Time: {time.toLocaleTimeString()} & Date: {time.toLocaleDateString()} </p>
    </>
  )
}

export default CurrentTime;