

export const getUsers = (req,res) => {
        res.status(200).json("Hii from crud app");

}

export const addUser = (req,res) =>{
    console.log("hello");
    res.send("add user response");
}