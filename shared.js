const getRandomString = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
module.exports = {
    getRandomString
}