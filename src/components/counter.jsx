import React, {Component} from 'react';

class Counter extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses ()}>
                {this.formatCount ()}
              </span>
            </div>
            <div className="col">
              <button
                onClick={() => this.props.onIncrement (this.props.counter)}
                className="btn btn-secondary btn-sm"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement (this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                disabled={this.props.counter.value === 0 ? 'Disabled' : ''}
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete (this.props.counter.id)}
                className="btn btn-danger btn-sm"
              >
                x
              </button>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
  formatCount = () => {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };

  getBadgeClasses () {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
