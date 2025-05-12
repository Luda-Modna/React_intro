const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const user = {
    imgSrc:
      "https://i.pinimg.com/736x/3c/d3/76/3cd3764ff576208a8305732ef8156f0a.jpg",
    name: "Anna",
    surname: "Bell",
    gender: "male",
    followers: 10,
  };
  return (
    <>
      <UserCard userInfo={user} />
    </>
  );
}

function UserCard(props) {
  const { userInfo } = props;

  const [followers, setFollowers] = React.useState(userInfo.followers);
  const addFollowersHandler = () => {
    setFollowers(followers + 1);
  };

  const [liked, setLiked] = React.useState(false);
  const changeColorHeardHandler = () => {
    setLiked(!liked);
  };
  const heardStyle = { color: liked ? "red" : "grey" ,cursor:'pointer',};

  const styleCard = {
    boxShadow: userInfo.gender === "male" ? "0 0 10px green" : "0 0 10px blue",
  };
  return (
    <article className="userCard">
      <img
        style={styleCard}
        src={userInfo.imgSrc}
        alt={userInfo.name + " " + userInfo.surname}
      />
      <button onClick={addFollowersHandler} className="btnAddFollowers">
        +
      </button>
      <h2>{userInfo.name + " " + userInfo.surname}</h2>
      <p>Followers: {followers}</p>
      <span>
        <i
          onClick={changeColorHeardHandler}
          style={heardStyle}
          className="fa-solid fa-heart"
        ></i>
      </span>
    </article>
  );
}
