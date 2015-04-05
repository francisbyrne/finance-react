var ExampleApplication = React.createClass({displayName: "ExampleApplication",
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message = seconds;

    return React.createElement("p", null, message);
  }
});
var start = new Date().getTime();
setInterval(function() {
  React.render(
    React.createElement(ExampleApplication, {elapsed: new Date().getTime() - start}),
    document.getElementById('container')
  );
}, 50);


// var StockDetails = React.createClass({
//   render: function() {
//     // var details = this.props.details;
//     return <ul><li>Hello world</li></ul>
//   }
// });
//
// React.render(<StockDetails />, document.getElementById('container'));
