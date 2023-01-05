
import * as fs from 'fs';
import * as path from 'path';
import { BlogInterface } from './blog.interface';
import { marked } from 'marked';

const blog : BlogInterface = {
    title: "test",
    content: "test"
};

const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>${blog.title}</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name="author" content="VIJAYaraaghavan Manoharan">
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
</head>
<body>
   <main>${blog.content}</main>
</body>
</html>
`;

const blogDir = path.join(__dirname, '../dist/',blog.title);
fs.mkdirSync(blogDir);

fs.writeFileSync(path.join(blogDir,"/index.html"),htmlTemplate);

