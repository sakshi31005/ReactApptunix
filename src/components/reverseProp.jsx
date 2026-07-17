function Child({ sendData }) {
  return <button onClick={() => sendData("Hello mummy")}>Click Me</button>;
}

export default Child;
