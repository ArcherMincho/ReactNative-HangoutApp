import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import pxToDp from '../../functions/pxToDp';

import SingleBtn from '../common/SingleBtn';
import WeekDateItem from './WeekDateItem';

const Week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

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

const WeekCalendar = props => {
    const [curList, setCurList] = useState([]);
    const [curMonth, setCurMonth] = useState(0);
    const [curDate, setCurDate] = useState(0);
    const [curListIndex, setCurListIndex] = useState(0);

    // init date
    useEffect(() => {
        const raw = new Date();
        // const year = raw.getFullYear();
        const month = raw.getMonth() + 1;
        const date = raw.getDate();
        const day = raw.getDay();
        setCurDate(date);
        getTimeList(-day); // get a date list of the current week
    }, []);

    // get date time information of a date
    // that is n days before/after the current date
    const getTime = (n) => {
        const raw = new Date();
        const getTime = raw.getTime() + (24 * 60 * 60 * 1000) * n;
        const needed = new Date(getTime);

        const year = needed.getFullYear();
        const month = needed.getMonth() + 1;
        const date = needed.getDate();
        return { year, month, date };
    }

    // get a list of date information of seven days of a week
    const getTimeList = (day) => {
        const list = [];
        for (let i = day + 1; i <= day + 7; i++) {
            list.push(getTime(i));
        }
        setCurList(list);
        setCurMonth(list[0].month);
    }

    const getToday = () => {
        const raw = new Date();
        return raw.getDate();
    }
    const today = getToday();

    const changeWeek = (weekNum) => {
        const raw = new Date();
        getTimeList(-(raw.getDay()) + (7 * weekNum));
    }

    const handlePrevClicked = () => {
        setCurListIndex(curListIndex - 1);
        changeWeek(curListIndex);
    }

    const handleNextClicked = () => {
        setCurListIndex(curListIndex + 1);
        changeWeek(curListIndex);
    }

    const handleDateSelected = (item) => {
        setCurDate(item.date);
    }

    // format months or dates that have only one digit
    const format = (num) => {
        return num < 10 ? '0' + num : num;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SingleBtn
                    onPress={handlePrevClicked}
                    myStyle={styles.headerBtn}
                    name="chevron-left"
                />
                <View>
                    <Text style={styles.headerText}>
                        <Text>{curList[0] && curList[0]["date"]}-</Text>
                        <Text>{curList.at(-1) && curList.at(-1)["date"]}</Text>
                        <Text>  {Month[curMonth - 1]}</Text>
                    </Text>
                </View>
                <SingleBtn
                    onPress={handleNextClicked}
                    myStyle={styles.headerBtn}
                    name="chevron-right"
                />
            </View>

            <View style={styles.dayContainer}>
                {curList.map((d, i) => {
                    return (
                        <WeekDateItem
                            key={d.date + d.year}
                            date={d.date}
                            isToday={d.date === today} // if today's date is the current selected date
                            current={d.date === curDate} // current selected date
                            day={Week[i]}
                            dots={2}
                            onPress={() => handleDateSelected(d)}
                        />
                    )
                })}
            </View>
        </View>
    )
}

export default WeekCalendar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: pxToDp(312),
        height: pxToDp(40),

        borderBottomWidth: pxToDp(1),
        borderColor: '#E4E4E4',
    },
    headerBtn: {
        paddingHorizontal: pxToDp(15),
    },
    headerText: {
        fontSize: pxToDp(20),
        fontWeight: '800',
    },
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '100%',
        padding: pxToDp(16),
    },

})
