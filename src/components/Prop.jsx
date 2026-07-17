// function Property(props) {
//   return (
//     <div>
//       <h2>Hello, {props.name}!</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// export default Property;

// destructuring prop method
function Destructuring({name, age}) {
  return (
    <div>
      <h2>name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
export default Destructuring;