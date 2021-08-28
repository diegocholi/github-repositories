export const convertDate = (date: Date) => {
    let day = date.getDate() > 0 && date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let month = date.getMonth() > 0 && date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
    let year = date.getFullYear()
    let hour = date.getHours() >= 0 && date.getHours() < 10 ? '0' + date.getHours()  : date.getHours()
    let minutes = date.getMinutes() >= 0 && date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return `${day}/${month}/${year} ${hour}:${minutes}`
}
