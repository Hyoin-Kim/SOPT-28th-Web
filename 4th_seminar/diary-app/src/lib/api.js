import axios from 'axios';

export const getUserData = async () => {
    try{
        const data = await axios.get('http://localhost:3001/posts');
        console.log("[Success] get card data");
        return data.data.data;

    }catch(e){
        console.log('[Fail] get card data');
        return null;
    }

};