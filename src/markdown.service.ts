import { marked } from "marked";
import axios from "axios";

export class MarkdownService {

    public async fetchContent() {

        const blogTag: Element = document.getElementsByTagName("blog")[0];

        const markdownContentURL: string = blogTag.getAttribute("content") as string;
        console.log("blogTag ", markdownContentURL);

        const { data, status } = await axios.get(markdownContentURL);
        console.log("Data and Status", data, status);
        if (status === 200) {
            blogTag.innerHTML = marked.parse(data);
        }


        // return data;
    }


}