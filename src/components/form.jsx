import { useState } from "react";

function NameForm() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted:', name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
export default NameForm;

