function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const miners = {
    Alice: randomBetween(1, 100),
    Bob: randomBetween(1, 100),
    Charlie: randomBetween(1, 100),
  };
  
  const pow = Object.keys(miners).reduce((a, b) => miners[a] > miners[b] ? a : b);
  console.log("Proof of Work selected:", pow);
  console.log(miners);
  
  const stakers = {
    Tom: randomBetween(100, 1000),
    Jerry: randomBetween(100, 1000),
    Spike: randomBetween(100, 1000),
  };
  
  const pos = Object.keys(stakers).reduce((a, b) => stakers[a] > stakers[b] ? a : b);
  console.log("\nProof of Stake selected:", pos);
  console.log(stakers);
  
  const votes = {
    NodeA: randomBetween(0, 10),
    NodeB: randomBetween(0, 10),
    NodeC: randomBetween(0, 10),
  };
  
  const dpos = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
  console.log("\nDelegated Proof of Stake selected:", dpos);
  console.log(votes);
  