class temporaryemail{
    constructor(){
        this.api = "https://temporary-email3.p.rapidapi.com"
        this.key="85c0287154msh55bbcae0f065001p12e225jsn7770b94568bb"
        this.email=null
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "XMLHttpRequest"}
    }
    async get_email(){
        let req=await fetch(`${this.api}/get?username=random&domain=random.com&rapidapi-key=${this.key}`,{method:"GET",headers: this.headers});
        let json=await req.json();
        this.email=await json["items"]["email"]
        return json
    }
    async messages_list(){
        let req=await fetch(`${this.api}/check?email=${this.email}&timestamp=${Date.now()}&rapidapi-key=${this.key}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {temporaryemail};