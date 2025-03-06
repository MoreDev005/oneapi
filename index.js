const fs = require('fs')
const express = require('express')
const port = process.env.SERVER_PORT
const app = express()
const ttdown = require('./tiktokwm.js')
const tw = require('./tw.js')
const getLevel = require('./toramlevel.js')
const {aichat} = require('./aitoxic.js')
const {aimod} = require('./aimod.js')
const igdl = require('./igdl4.js')
const fbdl = require('./fbdl.js')
const {mp3v4} = require('./ytdl3.js')
const {mp4} = require('./ytdl3V.js')
const ytmp3 = require('./tube.js')
const mp3 = require('./ytmp3.js')
const ytmp4 = require('./tubevideo.js')
const {getBuffer} = require('./myfunc.js')
const downloadFileAsBuffer = require('./downloadFileAsBuffer.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) =>{
  res.send(req.headers.host)
});

//https://apitoram.teramedia.repl.co/api/apitoram/id?data= isi disini
app.get('/download/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await getBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/download2/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await downloadFileAsBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytdlmp3/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlyt = `https://www.youtube.com/watch?v=${q}`
const emulate = () =>{
async function start() {
try{
const respon = await mp3v4(urlyt)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytdlmp4/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlyt = `https://www.youtube.com/watch?v=${q}`
const emulate = () =>{
async function start() {
try{
const respon = await mp4(urlyt)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/tkdl/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ttdown(q,baseUrl)
res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ttdl/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ttdown(q,baseUrl)
res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/twdl/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await tw(q,baseUrl)
res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ai/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
const emulate = () =>{
async function start() {
try{
const respon = await aichat(q)
  res.send(respon.respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.post('/aimod', async (req,res) => {
const q = req.body
//console.log(q)
const emulate = () =>{
async function start() {
try{
const respon = await aimod(q.identitas,q.pesan)
console.log("Terkirim =>",respon.respon)
  res.send(respon.respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/igdl/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlig = q
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await igdl(q,baseUrl)
res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/fbdl/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await fbdl(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytmp3/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ytmp3(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytmp4/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ytmp4(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/mp3/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await mp3(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/toramlevel/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
const emulate = () =>{
async function start() {
try{
const respon = await getLevel(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.listen(port,()=>{console.log(`Server ON di port ${port}`)})