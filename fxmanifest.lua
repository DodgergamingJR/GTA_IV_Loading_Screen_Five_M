fx_version 'cerulean'
description "Loadingscreen script by DodgergamingJR"
games { 'gta5' }
lua54 "yes"

author 'DodgergamingJR'
version '1.0.0'

loadscreen 'index.html'
loadscreen_manual_shutdown 'yes'
client_script 'client.lua'
server_script 'server.lua'
loadscreen_cursor 'yes'

files {
    'index.html',
    'css/style.css',
    'script/main.js',
    'song/*',
    'img/*'
}
