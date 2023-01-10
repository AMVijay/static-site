import { BlogType } from './blog.type';
import { BlogContentFetchService } from './blog-content-fetch.service';
import { HtmlGenerateService } from './html-generate.service';

const blogContentFetchService: BlogContentFetchService = new BlogContentFetchService();
const blogs : BlogType[] = blogContentFetchService.fetchBlogContent();

console.log("Blogs", blogs);

const htmlGenerateService: HtmlGenerateService = new HtmlGenerateService();

blogs.forEach(blog => {
    htmlGenerateService.generateHtml(blog);
});

