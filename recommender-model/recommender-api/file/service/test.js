const fs = require("fs");
function readFile() {
  // await fs.readFile("./cluster-info.json", "utf-8", (err, data) => {
  //   if (err) throw err;
  //   let clusterInfo = JSON.parse(data);
  //   log("clusterInfo ", JSON.stringify(clusterInfo, null, 4));
  //   return clusterInfo;
  // });
  const buffer = fs.readFileSync("./cluster-info.json", "utf-8");
  const data = JSON.parse(buffer);
  console.log(data);
  return data;
}
readFile();
