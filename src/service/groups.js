import https from "./config";

const group ={
    get: (hh_id)=> https.get(`/api/groups/student-groups/${hh_id}`),
}
export default group