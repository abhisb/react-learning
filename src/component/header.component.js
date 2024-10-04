function HeaderComponent({ title }) {
  const name = "Alex";
  return (
    <>
      <header>
        <div>{title}</div>
      </header>
      <div style={{ height: "50px" }}>Hi {name}!</div>
    </>
  );
}

export default HeaderComponent;
