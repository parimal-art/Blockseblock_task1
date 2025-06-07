const crypto = require("crypto");

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const input = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
    return crypto.createHash("sha256").update(input).digest("hex");
  }
}

const block1 = new Block(1, new Date().toISOString(), { amount: 100 }, "0");
const block2 = new Block(2, new Date().toISOString(), { amount: 200 }, block1.hash);
const block3 = new Block(3, new Date().toISOString(), { amount: 300 }, block2.hash);

console.log("Original chain:");
console.log(block1);
console.log(block2);
console.log(block3);

block1.data = { amount: 999 };
block1.hash = block1.calculateHash();

console.log("\nAfter modifying block 1:");
console.log(block1);
console.log(block2);
console.log(block3);
