import './less/input-moment.less';
import cx from 'classnames';
import React, { Component } from 'react';
import Calendar from './calendar';
import Time from './time';

export default class InputMoment extends Component {
  static defaultProps = {
    prevMonthIcon: 'ion-ios-arrow-left',
    nextMonthIcon: 'ion-ios-arrow-right',
    dateTitle: 'Date',
    timeTitle: 'Time',
    buttonTitle: 'Confirm',
    minuteStep: 1
  };

  state = {
    tab: 0
  };

  handleClickTab = (e, tab) => {
    e.preventDefault();
    this.setState({ tab: tab });
  };

  handleSave = e => {
    e.preventDefault();
    if (this.props.onSave) this.props.onSave();
  };

  render() {
    const { tab } = this.state;
    const {
      moment: m,
      className,
      prevMonthIcon,
      nextMonthIcon,
      onSave,
      dateTitle,
      timeTitle,
      buttonTitle,
      minuteStep,
      ...props
    } = this.props;
    const cls = cx('m-input-moment', className);

    return (
      <div className={cls} {...props}>
        <div className="options">
          <button
            type="button"
            className={cx('ion-calendar im-btn', { 'is-active': tab === 0 })}
            onClick={e => this.handleClickTab(e, 0)}
          >
            {dateTitle}
          </button>
          <button
            type="button"
            className={cx('ion-clock im-btn', { 'is-active': tab === 1 })}
            onClick={e => this.handleClickTab(e, 1)}
          >
            {timeTitle}
          </button>
        </div>

        <div className="tabs">
          <Calendar
            className={cx('tab', { 'is-active': tab === 0 })}
            moment={m}
            onChange={this.props.onChange}
            prevMonthIcon={this.props.prevMonthIcon}
            nextMonthIcon={this.props.nextMonthIcon}
          />
          <Time
            className={cx('tab', { 'is-active': tab === 1 })}
            moment={m}
            onChange={this.props.onChange}
            minuteStep={minuteStep}
          />
        </div>

        {this.props.onSave ? (
          <button
            type="button"
            className="im-btn btn-save ion-checkmark"
            onClick={this.handleSave}
          >
            {buttonTitle}
          </button>
        ) : null}
      </div>
    );
  }
}
