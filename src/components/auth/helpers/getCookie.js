export default function getCookie(name) {
    const cookies = '; ' + document.cookie
    const parts = cookies.split('; ' + name + '=')
    const value = parts.length === 2 ? parts.pop().split(';').shift() : null
    
    return value
}
