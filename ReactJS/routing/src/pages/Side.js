export default function Side(){

    const style1 = {
        height: "200px"
    }

    const style2 = {
        height: "60px"
    }


    return(
        (
            <div className="side">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div className="fakeimg" style={style1}>Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div className="fakeimg" style={style2}>Image</div><br/>
    
  </div>
        )
    );
}