import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  handleIncrement = () => {
    this.setState ({count: this.state.count + 1});
    console.log ('Increment clicked', this.state.count);
  };

  render () {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses ()}>
          {this.formatCount ()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags ()}

      </React.Fragment>
    );
  }
  formatCount = () => {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  };

  renderTags () {
    const {tags} = this.state;
    if (tags.length === 0)
      return (
        <p>
          There are no tags!
        </p>
      );
    return (
      <ul>
        {tags.map (tag => <li key={tag}>{tag}</li>)}
      </ul>
    );
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
