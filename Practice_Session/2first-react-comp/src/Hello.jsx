function Hello() {

  let myName = "tybans";
  let fullName = () => {
    return "Taiyab Ansari";
  }


  return(
    <h3>Hello! This is {myName}. I am your mentor {fullName()}</h3>
  )
}

export default Hello;