import { useEffect, useState } from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function ProductComponent({ name, content, title }) {
  const [interval, setInt] = useState(0);
  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title} - {product.id}
    </li>
  ));

  useEffect(() => {
    // console.log("Effect ran because on load of ProductComponent");

    // return () => {
    //   console.log("On destroy of the ProductComponent");
    // };

    const timer = setTimeout(() => {
      console.log("Timer executed:: ", interval);
      setInt(interval + 1);
    }, 1000);

    // Cleanup function
    // return () => {
    //   clearTimeout(timer);
    //   console.log("Cleanup executed");
    // };
  }, [interval]); // Only re-run the effect when `count` changes

  return (
    <>
      <div>{title}</div>
      <ul>{listItems}</ul>
    </>
  );
}

export default ProductComponent;
