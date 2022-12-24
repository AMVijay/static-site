import { marked } from "marked";
import axios from "axios"; 

export class MarkdownService{

    public async fetchContent(){

        const {data, status} = await axios.get("https://github.com/AMVijay/aws-learning/blob/main/vpc/README.md");
        console.log("Data and Status", data, status);
        return data;
    }


}