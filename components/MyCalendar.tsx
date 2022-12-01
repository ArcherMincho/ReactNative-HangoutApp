import { View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

const markedStyle = {
    marked: true,
    dotColor: '#aa2222',
};

const selectedStyle = {
    selected: true,
    selectedColor: '#222222',
    selectedTextColor: 'yellow',
    dotColor: 'white',
};


const eventDots = [
    { key: '1', color: 'blue' },
    { key: '2', color: 'orange' },
    { key: '3', color: 'green' },
];

const MyCalendar = props => {

    function getMarked() {
        const marked = {};
        const dotted = props.dotted;
        for (const d in dotted) {
            marked[d] = { dots: eventDots.slice(0, dotted[d]) };
        }
        let s = marked[props.selected];
        marked[props.selected] = s ? { ...s, ...selectedStyle } : selectedStyle;
        return marked;
    }

    return (
        // <Agenda
        //     disableAllTouchEventsForDisabledDays={true}
        //     markingType="multi-dot"
        //     // showWeekNumbers={true}
        //     markedDates={getMarked()}
        //     items={{}}
        // />
        <Agenda
            items={{
                '2022-12-01': [{ name: 'item 1 - any js object', height: 40, day: '2022-12-01' }],
                '2022-12-12': [{ name: 'item 2 - any js object', height: 80, day: '2022-12-12' }],
                '2022-12-22': [],
                '2022-12-25': [{ name: 'item 3 - any js object', height: 40, day: '2022-12-25' }, { name: 'any js object', height: 40, day: '2022-12-25' }]
            }}
            onDayPress={props.onDayPress}
            onDayChange={day => {
                console.log('day changed');
            }}
            selected={props.selected}
            minDate={'2022-12-01'}
            pastScrollRange={5}
            futureScrollRange={10}
            hideKnob={false}
            showClosingKnob={true}
            markedDates={getMarked()}
        />
    )
}

export default MyCalendar;
