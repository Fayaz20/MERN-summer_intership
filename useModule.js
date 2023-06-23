export const user_data=[
    {
        id:1,
        name:'Fayaz',
        age:20,
        email:"fayjzak@jkds.com"
    },
]
//CURD
export const addUser=(...new_user)=>{
    return user_data.push(...new_user)

}

export const editUser=(id,key,value)=>{
    const ob_in=user_data.findIndex(ele =>ele.id=id);
    return user_data[ob_in][key]=value;
}

export const deleteUser=(id)=>{
    const ob_in=user_data.findIndex(ele =>ele.id=id);
    return user_data.splice(ob_in,1);

}
export const editMultipleUser=(id=2,value={name:'Alan',age:45,email:"hjaxk!dk"})=>{
    const ob_in=user_data.findIndex(ele =>ele.id==id);
    user_data[ob_in]={
        ...user_data[ob_in],
        ...value
    }
}

