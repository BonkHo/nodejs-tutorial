const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const first = await readFilePromise("./content/first.txt", "utf-8");
		const second = await readFilePromise("./content/second.txt", "utf-8");
		await writeFilePromise(
			"./content/result-mind-grenade.txt",
			`This is the third file.`
		);
		const third = await readFilePromise(
			"./content/result-mind-grenade.txt",
			"utf-8"
		);
		console.log(first, second, third);
	} catch (err) {
		console.log(err);
	}
};

start();
