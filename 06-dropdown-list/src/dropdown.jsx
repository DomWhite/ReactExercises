// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    this.setState({open: !this.state.open })
  },

  getInitialState: function() {
    return { open: false }
  },

  handleItemClick: function(item) {
    console.log(item);
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem 
        item={item} 
        whenItemClicked={this.handleItemClick} 
        className={this.state.itemTitle === item ? "active" : "" }
        />
    }.bind(this))

    return <div className="dropdown">
      <Button 
        whenClicked={this.handleClick} 
        className="btn-default" 
        title={this.state.itemTitle || this.props.title} 
        subTitleClassName="caret" 
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
})

// 'whenClicked' is passed down to the child component 'button' as a prop and is accessed by 'this.prop.whenClicked'
// Only make changed to state via setState()
// Responding to user input we use state
// Responding to changes in data we use props