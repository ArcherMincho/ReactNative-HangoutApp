import { View, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import pxToDp from '../../functions/pxToDp';

import SingleBtn from '../common/SingleBtn';
import WeekDateItem from './WeekDateItem';

const Week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const WeekCalendar = props => {
    const [curList, setCurList] = useState([]);
    const [curListIndex, setCurListIndex] = useState(0);
    const [curMonth, setCurMonth] = useState(0);
    const [curDate, setCurDate] = useState(0);

    const { curYMD, setCurYMD, eventNums } = props;


    // init date
    useEffect(() => {
        const raw = new Date();
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
        const YMD = `${year}-${month}-${date}`;
        return { year, month, date, YMD };
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

    const changeWeek = (weekNum) => {
        const raw = new Date();
        getTimeList(-(raw.getDay()) + (7 * weekNum));
    }

    const handlePrevClicked = () => {
        const index = curListIndex - 1;
        setCurListIndex(index);
        changeWeek(index);
    }

    const handleNextClicked = () => {
        const index = curListIndex + 1;
        setCurListIndex(index);
        changeWeek(index);
    }

    const handleDateSelected = (item) => {
        setCurDate(item.date);
        setCurYMD(item.YMD);
    }

    const getToday = () => {
        const raw = new Date();
        const date = raw.getDate();
        const month = raw.getMonth() + 1;
        const year = raw.getFullYear();
        return `${year}-${month}-${date}`;
    }
    const today = getToday();

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
                            isToday={d.YMD === today} // if today's date is the current selected date
                            current={d.YMD === curYMD} // current selected date
                            day={Week[i]}
                            dots={eventNums[d.YMD]}
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
