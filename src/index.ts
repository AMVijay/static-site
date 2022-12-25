import { MarkdownService } from "./markdown.service";
import { TitleService } from "./title.service";

const markdownService : MarkdownService = new MarkdownService();
markdownService.fetchContent();

const titleService: TitleService = new TitleService();
titleService.updateTitle();
 

