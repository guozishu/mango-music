import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: './music-dir',
        keepExtensions: true,
        onFileBegin: (name, file) => {
            let musicPath = file.path
            file.path = `${musicPath.slice(0, musicPath.lastIndexOf('\/'))}/${file.name}`
        }
    }
}))

app.use(async ctx => {
    ctx.body = `
    <form action="/" method="POST" enctype="multipart/form-data">
        <input multiple type="file" name="music">
        <input type="submit" value="提交">
    </form>
  `;
});

app.listen(3000);
