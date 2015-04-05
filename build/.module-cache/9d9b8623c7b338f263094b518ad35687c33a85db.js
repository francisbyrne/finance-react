// var ExampleApplication = React.createClass({
//   render: function() {
//     var elapsed = Math.round(this.props.elapsed  / 100);
//     var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
//     var message = seconds;
//
//     return <p>{message}</p>;
//   }
// });
// var start = new Date().getTime();
// setInterval(function() {
//   React.render(
//     <ExampleApplication elapsed={new Date().getTime() - start} />,
//     document.getElementById('container')
//   );
// }, 50);

var StockSearchInput = React.createClass({displayName: "StockSearchInput",
  render: function() {
    return React.createElement("input", {type: "text", name: "stock-search"})
  }
});

var StockName = React.createClass({displayName: "StockName",
  render: function() {
    return (
      React.createElement("h2", null, this.props.stock.ticker, " - ", this.props.stock.name)
    )
  }
});

var StockPrice = React.createClass({displayName: "StockPrice",
  render: function() {
    return (
      React.createElement("p", null, 
        React.createElement("span", {class: "stock-price"}, this.props.stock.price), 
        React.createElement("span", {class: "stock-change"}, this.props.stock.change)
      )
    );
  }
});

var StockSearchResult = React.createClass({displayName: "StockSearchResult",
  render: function() {
    var myStock = {
      ticker: 'BHP',
      name: 'BHP Billiton',
      price: 42.21,
      change: -0.39,
      rangeLow: 39.41,
      rangeHigh: 52.01
    };
    return (
      React.createElement("div", {class: "search-result"}, 
        React.createElement(StockName, {stock: myStock}), 
        React.createElement(StockPrice, {stock: myStock})
      )
    )
  }
});

var StockSearch = React.createClass({displayName: "StockSearch",
  render: function() {
    return (
      React.createElement("div", {class: "stock-search"}, 
        React.createElement(StockSearchInput, null), 
        React.createElement(StockSearchResult, null)
      )
    )
  }
});

React.render(React.createElement(StockSearch, null), document.getElementById('container'));
