//check if it is dev server or prod server
const isDev = window.location.href.includes('dev.')

module.exports = {
    LOGIN_URL: isDev?'https://dev.accounts.codes/papers/login':'https://accounts.codes/papers/login',
    API_URL_BASE_CLIENT: 'https://papers.dev.leader.codes/api/',
    API_URL_FILES:'https://dev.files.codes/api/',
    API_URL_PAY:'https://pay.leader.codes',
    JWT:isDev? 'devJwt' : 'jwt',
    
}
