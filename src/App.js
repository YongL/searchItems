import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: "01", sku: "ELTLW-G1", brand: "apple", name: "iWatch" },
        { id: "02", sku: "ELTLW-G1", brand: "apple", name: "Macbook Pro" },
        { id: "06", sku: "ELTLW-G1", brand: "apple", name: "iWatch" },
        { id: "07", sku: "ELTLW-G1", brand: "apple", name: "Macbook Pro" },
        { id: "08", sku: "ELTLW-G2", brand: "dell", name: "XPS 5000" },
        { id: "09", sku: "ELTLW-G2", brand: "dell", name: "Alienware 2000" },
        { id: "03", sku: "ELTLW-G2", brand: "dell", name: "XPS 2001" },
        { id: "04", sku: "ELTLW-G2", brand: "dell", name: "Alienware 4000" }
      ],
      searchField: ""
    };

    this.__handlers = {
      searchChange: ({ target: { value } }) => {
        this.setState({ searchField: value });
      }
    };
  }

  render() {
    // keep the searchField and do filter here
    const { searchField, products } = this.state;
    const filteredProducts = products.filter(
      product =>
        product.name.toLowerCase().includes(searchField.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Search Product</h1>
        <SearchBox
          placeholder="search products"
          searchChange={this.__handlers.searchChange}
        />
        <CardList products={filteredProducts} />
      </div>
    );
  }
}

export default App;
// add api endpoint to get products
// run migration script to add product table
