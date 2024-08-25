# temporaryemail
JavaScript library for temporary email
# main
```js
async function main(){
    const {temporaryemail} = require('./temporaryemail');
    const email= new temporaryemail();
    let req=await email.get_email()
    console.log(req)
    console.log(email.email)
}
main()
```
