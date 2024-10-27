Here’s the README file exported in Markdown format:

---

# 🚀 MANTRA Chain Telegram Wallet Bot

This **Telegram bot** provides users with seamless access to key data and real-time updates from the **MANTRA Chain** directly through Telegram. Whether you want to monitor balances, get real-time block details, or even execute on-chain transactions, this bot has you covered!

## 📋 Features

### 1. **Address Balances**

Get real-time updates on token balances for any address on the **MANTRA Chain**. Simply provide an address and the bot will fetch and display the latest balance.

### 2. **Block Details**

Fetch and view details of specific blocks, including:

- Transactions within the block
- Validators participating in the block validation
- Other relevant block information

### 3. **Real-Time Updates**

Receive push notifications for key network events, including:

- New transactions involving your wallet address
- New blocks created on the chain
- Major network events (like governance proposals, validators joining/leaving, etc.)

### 4. **On-Chain Transaction Execution**

Execute on-chain transactions directly from the Telegram bot interface. With simple commands, users can:

- Transfer tokens
- Participate in governance votes
- Interact with smart contracts

### 5. **Integration with Mantra Token Factory**

The bot is integrated with the **MANTRA Token Factory**, allowing users to:

- Mint new tokens
- Query existing token details
- Manage token distribution

## 💡 How to Use

1. **Start the Bot**: Add the Telegram bot to your Telegram app and start interacting with it by typing `/start`.
2. **Get Address Balance**:
   - Command: `/balance <your_address>`
   - Example: `/balance mantra1qjqjjq9g...`
3. **Fetch Block Details**:
   - Command: `/block <block_height>`
   - Example: `/block 1000`
4. **Execute Transactions**:
   - Command: `/send <recipient_address> <amount> <token_symbol>`
   - Example: `/send mantra1qjqjjq9g... 100 OM`
5. **Receive Notifications**:

   - Subscribe to specific events:
     - `/subscribe blocks`
     - `/subscribe transactions <your_address>`

6. **Token Factory Commands**:
   - Command: `/mint <token_name> <amount>`
   - Example: `/mint NEWTOKEN 10000`

## 🛠️ Setup and Installation

### Requirements

- Node.js
- Telegram Bot API Token
- Access to the MANTRA Chain RPC endpoints

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/telegram-wallet-bot.git
   cd telegram-wallet-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and add your Telegram Bot API token and MANTRA Chain RPC endpoint:

   ```env
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   MANTRA_RPC_URL=https://rpc.dukong.mantrachain.io
   ```

4. Start the bot:
   ```bash
   npm start
   ```

## 📦 API Endpoints Used

- `/abci_query`: To fetch balance data for addresses.
- `/block`: To retrieve block details based on block height.
- `/broadcast_tx_sync`: For broadcasting transactions on-chain.
- `/validators`: To fetch the list of validators participating in block validation.
- **Mantra Token Factory**: Integrated with the Mantra token minting and querying services.

## 🎯 Future Enhancements

- **Staking Integration**: Enable users to delegate and undelegate tokens directly from Telegram.
- **Governance Participation**: Provide easy voting mechanisms for governance proposals.

## 🛡️ Security

- **Encryption**: All sensitive data (like private keys for transaction execution) is securely encrypted and stored.
- **Secure Transactions**: Users must verify their identity using Telegram’s authentication before executing on-chain transactions.

---

## 🤝 Contributing

Contributions are welcome! Please submit pull requests, and feel free to open issues for any bugs or feature requests.

---

## 📝 License

This project is licensed under the MIT License.



---

Made with ❤️

---

Let me know if you'd like any more modifications!
