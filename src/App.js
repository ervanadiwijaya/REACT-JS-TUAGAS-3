import React, { Component } from "react";

import Header from "./Page/Header";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKAmi from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import Footer from "./Page/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuMakanan />
        <MenuTentangKAmi />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
