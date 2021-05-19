import axios from 'axios';

export const getUserData = async(id) => {
    try{
        const {data} = await axios.get("https://api.github.com/users/" + id);
        console.log(data);
        return data;
    }catch(e){
        return null;
    }   

};



