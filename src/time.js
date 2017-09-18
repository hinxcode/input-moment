import cx from 'classnames';
import React, { Component } from 'react';

export default class extends Component {
  changeHours = value => {
    const m = this.props.moment;
    m.hours(value);
    this.props.onChange(m);
  };

  changeMinutes = value => {
    const m = this.props.moment;
    m.minutes(value);
    this.props.onChange(m);
  };

  render() {
    const m = this.props.moment;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <input className="time" maxLength={2} value={m.format('HH')} onChange={e => this.changeMinutes(e.target.value)} />
          <span className="separater">:</span>
          <input className="time" maxLength={2} value={m.format('mm')} onChange={e => this.changeMinutes(e.target.value)} />
        </div>
      </div>
    );
  }
}
