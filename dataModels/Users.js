const User = (name, email, password) => {
    let user = {
        name, email, password
    }

    return user;
}

module.exports = {User};