const dotenv = require('./dotenv');
const username = dotenv('DB_USERNAME');
const password = dotenv('DB_PASSWORD');

dbPassword = `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0-solyo.mongodb.net/test?retryWrites=true`;

module.exports = {
    mongoURI: dbPassword
};