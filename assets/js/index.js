const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  return (
    <>
      <Header />
      <div title="Hello">Hello React</div>
      <UserInfo />
      <News />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Page title</h1>
    </header>
  );
}

function UserInfo() {
  const user = {
    name: "Test",
    age: 17,
    imgSrc:
      "https://i.pinimg.com/736x/b0/f1/72/b0f172fee313c97a7e5c7dc2a813a7a0.jpg",
  };

  const userNameStyle = { color: user.age >= 18 ? "blue" : "green" };

  return (
    <article className="userCard">
      <h2 style={userNameStyle}>{user.name}</h2>
      <img src={user.imgSrc} alt={user.name} />
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <h2>Footer Page</h2>
    </footer>
  );
}

function News() {
  const news = { title: "Some news", body: "Something happend", isGood: false };
  const styleNew = { backgroundColor: news.isGood ? "green" : "red" };

  return (
    <article style={styleNew}>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
}
