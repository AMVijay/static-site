import {readdirSync, readFileSync} from 'fs';
import { marked } from 'marked';
import path, {join} from 'path';
import { BlogType } from './blog.type';

export class BlogContentFetchService{

    private blogs: BlogType[] = [];
    public fetchBlogContent(){

        const blogSourceDir = join(__dirname, "../blog/");

        this.blogs = new Array();

        readdirSync(blogSourceDir,{encoding:'utf8'}).forEach(data => {
            const blog: BlogType = {
                title: data,
                content: marked(readFileSync(path.join(blogSourceDir,data),{encoding:'utf8'}))
            } 
            this.blogs.push(blog);          
        });
        return this.blogs;
    }

}