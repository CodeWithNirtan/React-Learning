

var url = "./users.json";
async function FetchUsers() {
    console.log("data is currently loading");
        return  await fetch(url);
}

var a = FetchUsers();
a.then((data)=>{console.log(data.json())}).catch((err)=>{console.log("error")})
console.log("after promise")