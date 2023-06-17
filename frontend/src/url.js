const url = function() {
    if (process.env.NODE_ENV === 'prodaction'  ) {
        return 'http://api/oootimeautoservice'
    } else {
        return 'http://127.0.0.1:8000/api'
    }
}
export default url