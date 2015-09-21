var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
      this.props.whenItemClicked(this.props.item);
      console.log('Extra function could be here etc');
  },
  render: function() {
    return <li className={this.props.className}>
      <a onClick={this.handleClick}>{this.props.item}</a>
    </li>
  }
})

// the passing of whenItemClicked as a prop allows the addition of multiple commands 
// e.g. console logging as well as tracking the click event
// More importantly it keeps track of which <li>item was clicked to be passed back up to the parent 