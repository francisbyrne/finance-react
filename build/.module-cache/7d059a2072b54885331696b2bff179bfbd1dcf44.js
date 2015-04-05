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

var StockSearch = React.createClass({displayName: "StockSearch",
  render: function() {
    return React.createElement(StockSearchInput, null)
  }
});

React.render(React.createElement(StockSearch, null), document.getElementById('container'));
