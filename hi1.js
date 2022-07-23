const http = require('http');

const sever = http.createServer((req,res)=>{
    if(req.url === '/' ){
        res.end("chao viet nam");
    }
    if(req.url === '/tienich'){
        res.end("chao the gioi");
    }
    res.end(
      `<h1>xin chao cac ban cac ban </h1>
      <a href= /> ve cho cu ngay</a>
    `)
})
sever.listen(8080,()=>{`Sever live 8080`});


