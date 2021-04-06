const Header = (props) => {
  const activeItemsNumber = props.items.filter((item) => item.active).length;

  return (
    <header>
      <h2>Wielkość zamówienia zamówienia: {activeItemsNumber}</h2>
      <h2>Do zapłaty: {activeItemsNumber * 10}zł</h2>
    </header>
  );
};
