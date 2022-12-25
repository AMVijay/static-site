import { marked } from "marked";
import axios from "axios"; 

export class MarkdownService{

    public async fetchContent(){

        const blogTag = document.getElementsByTagName("blog")[0];
        console.log("blogTag ", blogTag);

        const {data, status} = await axios.get("https://raw.githubusercontent.com/AMVijay/aws-learning/main/vpc/README.md");
        console.log("Data and Status", data, status);
        return data;
    }


}