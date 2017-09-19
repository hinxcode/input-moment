import cx from 'classnames';
import isInteger from 'lodash/isInteger';
import inRange from 'lodash/inRange';
import React, { Component } from 'react';

export default class extends Component {
  inputHours;
  inputMinutes;

  isValidHours = v => {
    if (v.trim() == '' || isNaN(v) || v.includes('.') || !isInteger(parseFloat(v))) {
      return false;
    }

    return inRange(parseInt(v), 24);
  };

  isValidMinutes = v => {
    if (v.trim() == '' || isNaN(v) || v.includes('.') || !isInteger(parseFloat(v))) {
      return false;
    }

    return inRange(parseInt(v), 60);
  };

  changeHours = e => {
    const m = this.props.moment;

    if (this.isValidHours(e.target.value)) {
      m.hours(e.target.value);
      this.props.onChange(m);
    }

    this.inputHours.value = m.format("HH");
  };

  changeMinutes = e => {
    const m = this.props.moment;

    if (this.isValidMinutes(e.target.value)) {
      m.minutes(e.target.value);
      this.props.onChange(m);
    }

    this.inputMinutes.value = m.format("mm");
  };

  increaseHours = e => {
    e.stopPropagation();

    const m = this.props.moment;
    m.add(1, "hours");
    this.props.onChange(m);
    this.inputHours.value = m.format("HH");
  }

  decreaseHours = e => {
    e.stopPropagation();

    const m = this.props.moment;
    m.subtract(1, "hours");
    this.props.onChange(m);
    this.inputHours.value = m.format("HH");
  };

  increaseMinutes = e => {
    e.stopPropagation();

    const m = this.props.moment;
    m.add(this.props.minuteStep, "minutes");
    this.props.onChange(m);
    this.inputMinutes.value = m.format("mm");
  };

  decreaseMinutes = e => {
    e.stopPropagation();

    const m = this.props.moment;
    m.subtract(this.props.minuteStep, "minutes");
    this.props.onChange(m);
    this.inputMinutes.value = m.format("mm");
  };

  render() {
    const m = this.props.moment;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <div className="time-control">
            <button type="button" className="control-button" onClick={this.increaseHours}>
              <i className="ion-arrow-up-b" />
            </button>
            <input
              ref={ref => this.inputHours = ref}
              className="time"
              maxLength={2}
              defaultValue={m.format("HH")}
              onChange={e => { e.stopPropagation() }}
              onBlur={this.changeHours}
            />
            <button type="button" className="control-button" onClick={this.decreaseHours}>
              <i className="ion-arrow-down-b" />
            </button>
          </div>
          <span className="separater">:</span>
          <div className="time-control">
            <button type="button" className="control-button" onClick={this.increaseMinutes}>
              <i className="ion-arrow-up-b" />
            </button>
            <input
              ref={ref => this.inputMinutes = ref}
              className="time"
              maxLength={2}
              defaultValue={m.format("mm")}
              onChange={e => { e.stopPropagation() }}
              onBlur={this.changeMinutes}
            />
            <button type="button" className="control-button" onClick={this.decreaseMinutes}>
              <i className="ion-arrow-down-b" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
