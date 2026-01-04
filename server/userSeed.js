//writing code to seed initial users into the database
const registerUser = async() =>{
 try{

 }catch(err)
 {
    console.log('Error seeding user',err);
    return res.status(500),json({message:'Internal Server Error'});
 }
}

export default registerUser;