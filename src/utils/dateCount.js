const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const countDate = () => {
    const dataList = []
    let n = 0
    while(n < 7){
        let date =  new Date()
        date.setDate(date.getDate() + n);
        dataList.push({'date': date.toLocaleDateString(), 'day': daysName[date.getDay()]})
        n = n + 1
    }
    return dataList
}

export const getToday = () => {
    let date =  new Date()
    const today =  `${daysName[date.getDay()]}, ${date.toLocaleDateString()}`
    return today
}