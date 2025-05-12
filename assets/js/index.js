const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const isLight = true;
  const name = "Ivo";
  return (
    <>
      <ThemeButton isLightTheme={isLight} />
      <Greeting isGreeting={true} userName={name} />
      <Greeting isGreeting={false} userName="Max" />
    </>
  );
}

function ThemeButton(props) {
  const { isLightTheme } = props;

  const buttonStyle = {
    color: isLightTheme ? "black" : "white",
    backgroundColor: isLightTheme ? "white" : "black",
  };

  return (
    <button style={buttonStyle}>
      Switch to {isLightTheme ? "dark" : "light"}
    </button>
  );
}

function Greeting(props) {
  const {isGreeting, userName } = props;
  return (
    <h2>
      {isGreeting ? "Hello" : "Bye"}, {userName}!
    </h2>
  );
}
