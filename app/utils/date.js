

export default function(value, withTimes = false) {
    let date = value.split("T")[0];
    date = date.split("-");
    date = `${date[2]}/${date[1]}/${date[0]}`
    if (!withTimes)
        return date

    let time = value.split("T")[1];
    time = time.split(":");
    time = `${time[0]}:${time[1]}Hs`

    return `${date} ${time}`
}