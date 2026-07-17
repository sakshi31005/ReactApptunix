import { useEffect, useState } from "react";
function CustomHooks(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return [data, loading, error];
}
export default CustomHooks;
