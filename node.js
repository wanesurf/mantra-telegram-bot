require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

// Load environment variables
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const rpcBaseUrl = process.env.MANTRA_RPC_URL;

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(botToken, { polling: true });

// Helper function to call MANTRA RPC
async function callRpc(endpoint, params = "") {
  try {
    const response = await axios.get(`${rpcBaseUrl}/${endpoint}${params}`);
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Command to get address information
bot.onText(/\/address (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const address = match[1]; // Get address from the command

  // Manually encode the address if needed (depends on chain setup)
  const encodedAddress = Buffer.from(address).toString("hex");

  // Make the ABCI query for the address info
  const result = await callRpc(
    "abci_query",
    `?path=/store/acc/key&data=${encodedAddress}&prove=false`
  );

  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get ABCI Info
bot.onText(/\/abci_info/, async (msg) => {
  const chatId = msg.chat.id;
  const result = await callRpc("abci_info");
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get Block details by height
bot.onText(/\/block (\d+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const blockHeight = match[1]; // Get block height from the command
  const result = await callRpc("block", `?height=${blockHeight}`);
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get Transaction by Hash
bot.onText(/\/tx (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const txHash = match[1]; // Get transaction hash from the command
  const result = await callRpc("tx", `?hash=${txHash}&prove=true`);
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to query ABCI with custom parameters
bot.onText(/\/abci_query (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const [path, data, height, prove] = match[1].split(" ");
  const result = await callRpc(
    "abci_query",
    `?path=${encodeURIComponent(path)}&data=${data}&height=${
      height || ""
    }&prove=${prove || false}`
  );
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get Validators for a specific block height
bot.onText(/\/validators (\d+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const height = match[1]; // Get block height from the command
  const result = await callRpc("validators", `?height=${height}`);
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get status of the MANTRA Chain node
bot.onText(/\/status/, async (msg) => {
  const chatId = msg.chat.id;
  const result = await callRpc("status");
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get network health
bot.onText(/\/health/, async (msg) => {
  const chatId = msg.chat.id;
  const result = await callRpc("health");
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Command to get network info
bot.onText(/\/net_info/, async (msg) => {
  const chatId = msg.chat.id;
  const result = await callRpc("net_info");
  bot.sendMessage(chatId, JSON.stringify(result, null, 2));
});

// Default fallback for unknown commands
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "I am sorry, I do not recognize this command. Try /status or /abci_info"
  );
});

console.log("Bot is running...");
