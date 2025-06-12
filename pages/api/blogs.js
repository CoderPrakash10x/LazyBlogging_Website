import * as fs from 'fs';

export default function blogs(req, res){
fs.readFile("blogdata/How-to-learn-javascript.json", 'utf-8' , (err ,data)=>{
    res.status(200).json(JSON.parse(data));
})
}