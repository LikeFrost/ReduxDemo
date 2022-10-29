/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import '../mock/menuApi';

export default{
    async getMenu(){
        return await axios.get('/api/v1/menu')
    },
    async updateMenu(menu){
        return await axios.post('/api/v1/menu',{
            menu,
        })
    }
}