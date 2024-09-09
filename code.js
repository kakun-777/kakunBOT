const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.login("TOKEN");

client.on('ready', () => {
    console.log(`${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content.includes("おはよう")) {
        if (message.author.bot) return; // Botには反応しないようにするa
            message.channel.send("おはよう！");
            console.log("おはよう！といいました");
    }
    if (message.content.includes("こんにちは")) {
        if (message.author.bot) return;
            message.channel.send("こんにちは！");
            console.log("こんにちは！といいました");
    }
    if (message.content.includes("おやすみ")) {
        if (message.author.bot) return;
            message.channel.send("おやすみー");
            console.log("おやすみーといいました");
    }
    if (message.content.includes("こんばんは")) {
        if (message.author.bot) return;
            message.channel.send("こんばんはー");
            console.log("こんばんはといいました");
    }
    if (message.content.includes("!emu")) {
        if (message.author.bot) return;
            message.channel.send("檀黎斗「宝生永夢ゥ！」\n「何故君が適合手術を受けずに……エグゼイドに変身できたのか。」\n「何故ガシャットを生み出せたのか。」\n「何故変身後に頭が痛むのかァ！」\n鏡飛彩「それ以上言うな！」\n「ハァ……。」\n花家大我「やめろォォォ！」\n檀黎斗「宝生永夢ゥ！」\n「君が、世界で初めて、バグスターウイルスに感染した男だからだぁーーっははははははっ！」\n「はぁーはははは！！」");
            console.log("!emuが実行されました");
        }
    if (message.content.includes("!ping")) {
        if (message.author.bot) return;
            const ping = client.ws.ping;
            message.channel.send(`:ping_pong: ポング: \`${ping}ms\``);
            console.log("!pingが実行されました");
    }
    if (message.content.includes("!gacha")) {
        if (message.author.bot) return;
          const arr = ["LR かまぼこ陛下", "PR 死にかけのかまBOT(パラレル世界線)", "SSR 新品のかまBOT", "PR かぁくん(パラレル世界線)","SSR かぁくん","SSR 食べ掛けのかまBOT","SR シアン・クレイヤー","SR アマミズ","SR セク","PR ｾｪｪｪｪｪｪｪｪｪｯｪｪｪｪｪｯｸｼｮｵｵｵｵｵｵｵﾝ","SR かまぼこ陛下の薄い本","R かまぼこ","R window§495","R アルミ玉","R ハンドスピナー","R Switch","R ヘルライズキー","R ロッツォ","R 白米","R カレーうどん","R パン","R フランの帽子","R ダイナマイト","N アルミ玉","N はばると","N てぃーえいち","N 水道水入りのコップ"];
          const weight = [1, 1, 1, 1, 2, 2, 5, 5, 2.5, 2.5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20,];
          let result = "";
        
          let totalWeight = 0;
          for (let i = 0; i < weight.length; i++) {
            totalWeight += weight[i];
          }
          let random = Math.floor(Math.random() * totalWeight);
          
          for (let i = 0; i < weight.length; i++) {
            if (random < weight[i]) {
              result = arr[i];
              break;
            } else {
              random -= weight[i];
            }
          }
        
          message.channel.send(`${result} が当選した！`);
        }    
            console.log("!gachaが実行された");
    
});
