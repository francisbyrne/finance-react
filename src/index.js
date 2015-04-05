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

var StockSearchInput = React.createClass({
  render: function() {
    return <input type="text" name="stock-search" />
  }
});

var StockName = React.createClass({
  render: function() {
    return (
      <h2>{this.props.stock.ticker} - {this.props.stock.name}</h2>
    )
  }
});

var StockPrice = React.createClass({
  render: function() {
    return (
      <p>
        <span class="stock-price">{this.props.stock.price}</span>
        <span class="stock-change">{this.props.stock.change}</span>
      </p>
    );
  }
});

var StockFundamentals = React.createClass({
  render: function() {
    var stock = this.props.stock;
    return (
      <dl class="stock-fundamentals">
        <dt>Range</dt><dd>{stock.rangeLow} - {stock.rangeHigh}</dd>
        <dt>52-Week</dt><dd>{stock.yearHigh}</dd>
        <dt>Vol/Avg.</dt><dd>{stock.volume} / {stock.average}</dd>
      </dl>
    );
  }
});

var StockSearchResult = React.createClass({
  render: function() {
    var myStock = {
      ticker: 'BHP',
      name: 'BHP Billiton',
      price: 42.21,
      change: -0.39,
      rangeLow: 39.41,
      rangeHigh: 52.01,
      yearHigh: 52.01,
      volume: 100000,
      average: 50000
    };
    return (
      <div class="search-result">
        <header>
          <StockName stock={myStock} />
          <StockPrice stock={myStock} />
        </header>
        <StockFundamentals stock={myStock} />
      </div>
    )
  }
});

var StockSearch = React.createClass({
  render: function() {
    return (
      <div class="stock-search">
        <StockSearchInput />
        <StockSearchResult />
      </div>
    )
  }
});

React.render(<StockSearch />, document.getElementById('container'));
