function Greeting({ name }) {
  const hour = new Date().getHours();

  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>Current Hour: {hour}</p>
    </div>
  );
}

export default Greeting;