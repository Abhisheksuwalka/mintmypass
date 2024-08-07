// import React, { useState } from 'react';
// import Web3 from 'web3';
// import './NFTValidation.css';

// const NFTValidation = () => {
//   const [nftId, setNftId] = useState('');
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setNftId(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

//     const contract = new web3.eth.Contract(/* ABI */, /* Contract Address */);

//     try {
//       const isValid = await contract.methods.isValidNFT(nftId).call();
//       setStatus(isValid ? 'Valid NFT' : 'Invalid NFT');
//     } catch (err) {
//       console.error(err);
//       setStatus('Error validating NFT');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="formStyle">
//       <input
//         type="text"
//         value={nftId}
//         onChange={handleChange}
//         placeholder="NFT ID"
//         required
//         className="inputStyle"
//       />
//       <button type="submit" className="buttonStyle">Validate NFT</button>
//       <p>{status}</p>
//     </form>
//   );
// };

// export default NFTValidation;
