import ProductComponent from "./products.component";
import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile({ title, id }) {
  const [count, setCount] = useState(5);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{user.name} - Hello</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <ProductComponent
        name={user.name}
        content={"Artist"}
        title={title}
        id={id}
      />

      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}
