let userObject = {
    userName: 'Philip',
    fatherName: 'Norman',
    className: 'four',
};
for(let[key, value] of Object.entries(userObject)){
    console.log(`${key}: ${value}`);
}