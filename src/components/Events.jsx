// function Button() {
//   function handleClick() {
//     alert("clicking the button");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}> clickMe</button>
//     </div>
//   );
// }
// export default Button;

function Button2(){
    function handleChange(e){
     console.log(e.target.value);
    }
    return(
        <div>
         <input onChange={handleChange} placeholder= "...........sakshi enter your  details." />
        </div>
    )
}
export default Button2;
