const initialState = [
    {
      label:'menu3',
      key:1,
    },
    {
      label:'menu4',
      key:2,
    }
];
export const menuReducer = (preState = initialState, action)=>{
    const {type, data} = action;
    switch(type){
        case 'CLEAR':
            return [];
        case 'UPDATE':
            return data;
        default:
            return preState;
    }
}