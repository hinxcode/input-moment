# input-moment 
React datetime picker powered by [momentjs](http://momentjs.com)

The design is from https://dribbble.com/shots/1439965-Due-Date-and-Time-Picker.

The icon is from [ionicons](http://ionicons.com/).

### Installation
``` sh
npm i input-moment --save
```

**Notice:** This module requires [moment](https://www.npmjs.com/package/moment) as a [peerDependency](https://docs.npmjs.com/files/package.json#peerdependencies).

### Usage
``` javascript
<InputMoment
  moment={this.state.moment}
  onChange={this.handleChange}
  onSave={this.handleSave}
  minuteStep={1}
  dateTitle="Date"
  timeTitle="Time"
  buttonTitle="Confirm"
  prevMonthIcon="ion-ios-arrow-left"
  nextMonthIcon="ion-ios-arrow-right"
/>
```

### Development
- npm install
- npm start
- http://localhost:8080

### License
ISC
