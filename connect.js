		provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        window.onload = async function () {
        if (window.ethereum) {
                await ethereum.send('eth_requestAccounts');
				swal( "Cool!","Metamask Detected", "success");
		}
		else{
			swal("Sorry!", "Metamask not detected", "error");
		}
    };
		const contract_address = "0x8fe4f8a477b255979cb5A0BE8Bd04F6D2039FEcF";
		const contract_abi =[
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "checkSubscribe",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "plan_id",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "plans",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "amount",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "sub_id",
						"type": "uint256"
					}
				],
				"name": "subscribe1",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "sub_id",
						"type": "uint256"
					}
				],
				"name": "subscribe2",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "sub_id",
						"type": "uint256"
					}
				],
				"name": "subscribe3",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "userDetails",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "start_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
		const contract_read = new ethers.Contract(contract_address, contract_abi, provider);
		const contract_write = new ethers.Contract(contract_address, contract_abi, signer);

		function videopage(){
		window.location.href = "Videos.html";
		}

		var check = false;
	function subscribe1() {
		if(!check){
		contract_write.subscribe1(1).then((transaction) => {
					localStorage.setItem("plan","1")
					swal("Nice!", "Plan Activated", "success");
					setTimeout(videopage , 5000);
					check = true;
		})}
		else {
			swal("Sorry!", "Already Have An Active Plan...", "error");
			check = false;
		}
	}
	
	function subscribe2() {

		contract_write.subscribe2(2).then((transaction) => {
			localStorage.setItem("plan","2")
			swal("Nice!", "Plan Activated", "success");
				setTimeout(videopage , 50000);


		})
	}
	function subscribe3() {

		contract_write.subscribe3(3).then((transaction) => {
			localStorage.setItem("plan","3")
			swal("Nice!", "Plan Activated", "success");
			setTimeout(videopage , 50000);
		})
	}