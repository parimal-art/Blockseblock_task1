const crypto = require("crypto");

class Block {
  constructor(data) {
    this.data = data;
    this.nonce = 0;
    this.hash = "";
  }

  mine(difficulty) {
    const target = "0".repeat(difficulty);
    const start = Date.now();

    while (true) {
      const content = this.data + this.nonce;
      this.hash = crypto.createHash("sha256").update(content).digest("hex");
      if (this.hash.startsWith(target)) {
        break;
      }
      this.nonce++;
    }

    const end = Date.now();
    console.log("Hash:", this.hash);
    console.log("Nonce:", this.nonce);
    console.log("Time (s):", (end - start) / 1000);
  }
}

const block = new Block("Some transaction data");
block.mine(4);
