import { apiInstance } from "../Instances/Api.instance"

export const fetchUser = async () => {
    let res = await apiInstance.get("/user");
    console.log(res);
    
    return res.data.user;
}