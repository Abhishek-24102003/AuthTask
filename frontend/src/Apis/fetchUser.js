import { apiInstance } from "../Instances/Api.instance"

export const fetchUser = async (id) => {
    let res = await apiInstance.get(`/user/${id}`);
    console.log(res);
    
    return res.data.user;
}