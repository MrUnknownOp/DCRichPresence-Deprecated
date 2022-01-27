var RPC = require('discord-rpc');

var rpc = new RPC.Client({
    transport : 'ipc'
})

rpc.on('ready', async() => {

    rpc.setActivity({
        details: 'Celebrating 1k on my youtube channel!',
        state: "Sub to my yt 'TGC :- THE GAMERS CLAN'",
        startTimestamp: new Date(),
        largeImageKey: 'large',
        largeImageText: 'Subscribe to TGC :- THE GAMERS CLAN',
        smallImageKey: 'small',
        smallImageText: 'Free Lancing, DM me for more info!',
        buttons : [{
            label: "Sub to me!",
            url : "https://www.youtube.com/tgcthegamersclan"
        },
        {
            label: "Add My bot to your server!",
            url: "https://discord.com/api/oauth2/authorize?client_id=774225512373551115&permissions=272100390&scope=bot%20applications.commands"
        }]
        
        
    })

    console.log("Client ready")
})

rpc.login({
    clientId: 'Your Client ID'
})
