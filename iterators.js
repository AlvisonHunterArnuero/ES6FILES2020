let dev = "";
const myIterable = {
  *[Symbol.iterator]() {
    let whoAsks = "";
    whoAsks = "Alfonso";
    yield whoAsks;
    whoAsks = "Hosmel";
    yield whoAsks;
    whoAsks = "Alvison";
    yield whoAsks;
    whoAsks = "Pocoyo";
    yield whoAsks;
  },
};

for (let value of myIterable) {
  dev =
    value === "Pocoyo"
      ? "does not approve this post!"
      : "has doubts about this post...";
  console.log(`${value} ${dev}`);
}
