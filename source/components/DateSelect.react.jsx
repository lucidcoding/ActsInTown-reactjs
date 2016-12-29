var React = require('react');
var ReactDOM = require('react-dom');

var DateSelect = React.createClass({
    getInitialState: function() {
        var now = new Date();
        return { 
            days: [],
            day: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear()
        };
    },
    componentWillMount: function() {
        this.setDays(this.state.year, this.state.month, this.state.day);
    },    
    setDays: function(year, month, day) {
        var daysInMonth = this.getDaysInMonth(year, month, day);
        var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];     
        var days = [];

        for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
            var currentDate = new Date(year, month, dayIndex);
            days.push({
                dayOfWeek: dayNames[currentDate.getDay()],
                dayOfMonth: dayIndex.toString()
            });
        }
        
        this.setState({
            days: days
        });
    },
    getDaysInMonth: function(year, month, day) {
        var monthInt = parseInt(month);
        var daysInMonth = 31;

        if (monthInt === 3
            || monthInt === 5
            || monthInt === 8
            || monthInt === 10) {
            daysInMonth = 30;
        }

        if (monthInt === 1) {
            if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
        }

        return daysInMonth;
    },
    handleDayChange: function(e) {
        this.setState({
            day: e.target.value
        });
    },
    handleMonthChange: function(e) {
        this.setState({
            month: e.target.value
        });
        
        this.setDays(this.state.year, e.target.value, this.state.day);
    },
    handleYearChange: function(e) {
        this.setState({
            year: e.target.value
        });
        
        this.setDays(e.target.value, this.state.month, this.state.day);
    },
    getValue: function() {
        var date = new Date(this.state.year, this.state.month, this.state.day, 0, 0, 0);
        return date;
    },
    render: function () {
        var currentDate = new Date();
        
        var dayOptions = this.state.days.map(function(day) {
            return (
                <option value={day.dayOfMonth} key={day.dayOfMonth}>{day.dayOfWeek}, {day.dayOfMonth}</option>
            );
        });
        
        var months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var monthOptions = [];
        
        for (var monthIndex = 0; monthIndex < 12; monthIndex++) {
            monthOptions.push(
                <option value={monthIndex} key={monthIndex}>{months[monthIndex]}</option>
            );
        }
        
        var yearOptions = [];

        for (var yearOffset = 0; yearOffset < 12; yearOffset++) {
            var year = currentDate.getFullYear() + yearOffset;

            yearOptions.push(
                <option value={year} key={year}>{year}</option>
            );
        }
 
        return (
            <div>
                <select value={this.state.day}
                        onChange={this.handleDayChange}>
                    {dayOptions}
                </select>
                <select value={this.state.month}
                        onChange={this.handleMonthChange}>
                    {monthOptions}
                </select>
                <select value={this.state.year}
                        onChange={this.handleYearChange}>
                    {yearOptions}
                </select>
            </div>
        );
    }
});

module.exports = DateSelect;
