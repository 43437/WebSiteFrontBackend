const Koa = require('koa');
const fs = require('fs')
const app = new Koa();

const https = require('https')
const socketIo = require("socket.io");

const Router = require('koa-router');

let routeAll = new Router();

routeAll.get('/', async(ctx, next)=>{
    let html = `
    Home body
    `
    ctx.body=html
})

routeAll.get('/404', async(ctx, next) =>{
    ctx.body='404 page!'
    //await next()
    }).get('/helloreact/:id', async(ctx, next)=>{
        let msg='good'
        if (isNaN(ctx.params.id)){
            msg={data:200, error:'not number'}   
        }else{
            msg={data:200, error:'all good.'}
        }
        ctx.body=msg
    //await next()
    }).get('/hireact/:id', async(ctx, next)=>{
        ctx.body={data:100, error:'hi react'}
    })

app.use(routeAll.routes()).use(routeAll.allowedMethods())
const server = require('http').createServer(app.callback());
server.listen(4000);
let socket = require('socket.io').listen(server);
// socket.origins((origin, callback) => {
//     callback(null, true);
//   });
socket.on('connection',(client)=>{
    //sock client func
    console.log('connected.')
    setInterval((client) => {
        a=Math.random()
        b=Math.random()
        socket.emit('FromAPI', { x: a, y:b });
    }, 15000)
    
    socket.on('my other event', function (data) {
      console.log(data);
    });
})
