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


var StockDetails = React.createClass({displayName: "StockDetails",
  render: function() {
    // var details = this.props.details;
    return React.createElement("ul", null, React.createElement("li", null, "Hello world"))
  }
});

React.render(React.createElement(StockDetails, null), document.getElementById('container'));
