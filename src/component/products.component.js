const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function ProductComponent({ name, content, title }) {
  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title} - {name} - {content}
    </li>
  ));

  return (
    <>
      <div>{title}</div>
      <ul>{listItems}</ul>
    </>
  );
}

export default ProductComponent;
