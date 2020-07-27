const useState = React.useState

const playerInfo = [
  {name: "Roger Federer", gs:20, id:1},
  {name: "Rafael Nadal", gs:19, id:2},
  {name: "Novak Djokovic", gs:17, id:3},
  {name: "Pete Sampras", gs:14, id:4}
]

function FirstApp() {
  return (
    <>
      <Header />
      <LikeArea />
      <ul>
        {playerInfo.map(player => <Player name={player.name} gs={player.gs} key={player.id}/> )}
      </ul>
      <TimeArea />
    </>
  );
}

function Header() {
  return <h1 className="title">App Header</h1>  
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);
  
  function incrementLike() {
    setLikeCount(function(previous) {
      return previous + 1;
    });
  }
  
  function decreaseLike() {
    setLikeCount(function(previous) {
      if(previous > 0) {
        return previous - 1; 
      }
      else {
        return 0;
      }
    });
  }
  
  return (
    <>
      <h3 className="like">This page has been liked {likeCount} times</h3>
      <div className="buttons-div">
        <button onClick={incrementLike}>Like</button>
        <button  onClick={decreaseLike}>Dislike</button>
      </div>
    </>
  );
}

function TimeArea() {
  // destructuring the array returned by useState
  // variables : time - access the state value, setTime - update the state value
  const [time, setTime] = useState(new Date().toLocaleString()); 
  
  setTimeout(function() { 
    setTime(new Date().toLocaleString()) 
  }, 1000)
  
  return (
    <>
       <p>Current time is {time}</p>
       <small className="footer">More Info</small>
    </>
  )
}

function Player(props) {
  return <li>{props.name} won {props.gs} GrandSlam titles</li>
}


ReactDOM.render(<FirstApp />, document.querySelector('#app'))
 