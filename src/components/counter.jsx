import React, {Component} from 'react';

class Counter extends Component {
  // state = {
  //   // tags: ['tag1', 'tag2', 'tag3'],
  // };

  render () {
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses ()}>
          {this.formatCount ()}
        </span>
        <button
          onClick={() => this.props.onIncrement (this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags ()} */}
        <button
          onClick={() => this.props.onDelete (this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

      </React.Fragment>
    );
  }
  formatCount = () => {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };

  renderTags () {
    const {tags} = this.props.counter;
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
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
