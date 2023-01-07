import { BlogInterface } from './blog.interface';
import { BlogContentFetchService } from './blog-content-fetch.service';
import { HtmlGenerateService } from './html-generate.service';

const blogContentFetchService: BlogContentFetchService = new BlogContentFetchService();
const blogs : BlogInterface[] = blogContentFetchService.fetchBlogContent();

console.log("Blogs", blogs);

const htmlGenerateService: HtmlGenerateService = new HtmlGenerateService();

blogs.forEach(blog => {
    htmlGenerateService.generateHtml(blog);
});

