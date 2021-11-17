const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
	const gameContract = await gameContractFactory.deploy(
		["Wanda Maximoff", "Elsa of Arendelle", "Eleanor Shellstrop"], // Names
		[
			"https://www.thenewsfetcher.com/wp-content/uploads/2021/03/scarlet-witch-wandavision-696x382.png",
			"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/14/1459783312-frozen-elsa-1.jpg",
			"https://img.buzzfeed.com/buzzfeed-static/static/2019-10/23/21/asset/e85e19b17c5f/sub-buzz-3917-1571865532-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
		], // Images
		[300, 1000, 200], // HP values
		[1000, 100, 200], // Attack damage values,
		"Tom Riddle", // Boss name
		"https://www.previewsworld.com/SiteImage/MainImage/STL122098.jpg", // Boss image
		10000, // Boss hp
		50 // Boss attack damage
	);
	await gameContract.deployed();

	console.log("Contract deployed to:", gameContract.address);

	// let txn;

	// // We only have three characters
	// // Want to mint an NFT w/ the character at index 2 of array
	// txn = await gameContract.mintCharacterNFT(1);	// Hardhat sets up local wallet for us
	// await txn.wait();

	// // // Get the value of the NFT's URI (NFT of token ID 1!!)
	// // let returnedTokenUri = await gameContract.tokenURI(1);
	// // console.log("Token URI:", returnedTokenUri);

	// // Attack boss!
	// txn = await gameContract.attackBoss();
	// await txn.wait();

	// txn = await gameContract.attackBoss();
	// await txn.wait();

};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();