function formatTime(date: Date): string {
    const amPm = date.getHours() > 11 ? "PM" : "AM";
    const time = date.toLocaleString().split(",")[1].trim().split(" ")[0].split(":").slice(0, 2).join(":");
    return time + " " + amPm;
}

export function formatDateTimeToShow(time: number): string {
    const curDate: Date = new Date();
    const msgDate: Date = new Date(time);

    let showdate: string = msgDate.toDateString().substring(4).trim();
    if (curDate.getFullYear() === msgDate.getFullYear()) {
        if (curDate.getMonth() === msgDate.getMonth() && curDate.getDate() === msgDate.getDate()) {
            return formatTime(msgDate);
        }

        return showdate.substring(0, showdate.length - 4).trim();
    }
    return showdate;
}
