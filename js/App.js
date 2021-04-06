class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: true },
    ],
  };

  handleStatusChange = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }

      return item;
    });

    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleStatusChange}
        />
      </React.Fragment>
    );
  }
}
