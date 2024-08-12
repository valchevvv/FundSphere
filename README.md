<h1>FundSphere</h1>

<p>FundSphere is a decentralized application (dApp) built with a React TypeScript front-end and Hardhat for deploying Ethereum smart contracts.</p>

<h2>Features</h2>
<ul>
  <li>Create and manage funding campaigns</li>
  <li>Contribute to campaigns using Ethereum</li>
  <li>Withdraw funds when campaign goals are met</li>
  <li>Smart contract interactions via the Ethereum blockchain</li>
  <li>User authentication with MetaMask</li>
  <li>Real-time updates of campaign statuses</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Front-end:</strong> React, TypeScript, Tailwind CSS</li>
  <li><strong>Smart Contracts:</strong> Hardhat, Solidity</li>
  <li><strong>Blockchain:</strong> Ethereum</li>
</ul>

<h2>Prerequisites</h2>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
  <li>Node.js (v20+)</li>
  <li>npm</li>
  <li>MetaMask (or another Ethereum wallet)</li>
</ul>

<h2>Getting Started</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/valchevvv/FundSphere.git
cd FundSphere
</code></pre>

<h3>Smart Contracts Setup</h3>
<ol>
  <li><strong>Navigate to the contracts directory:</strong>
    <pre><code>cd contracts</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Deploy Contracts:</strong>
    <pre><code>npx hardhat run ignition/modules/CampaignFactoryDeploy.ts --network network-name</code></pre>
    <p>Replace <code>network-name</code> with your desired network (e.g., sepolia, mainnet).</p>
  </li>
</ol>

<h3>Front-end Setup</h3>
<ol>
  <li><strong>Navigate to the client directory:</strong>
    <pre><code>cd ../client</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Environment Variables:</strong>
    <p>Create a <code>.env</code> file in the <code>client</code> directory and add the following variables:</p>
    <pre><code>VITE_WC_PROJECT_ID=
VITE_WC_FACTORY_CONTRACT_ID=
VITE_WC_ALCHEMY_API_KEY=
</code></pre>
  </li>
  <li><strong>Run the front-end application:</strong>
    <pre><code>npm run dev</code></pre>
    <p>The front-end should now be running on <code>http://localhost:4173</code>.</p>
  </li>
</ol>

<h2>Running the App</h2>
<p>Once both the smart contracts and front-end are deployed and running, you can access the application by navigating to <code>http://localhost:4173</code> in your browser.</p>

<h2>Project Structure</h2>
<ul>
  <li><strong>contracts/</strong>: Contains the Hardhat setup for deploying Ethereum smart contracts.</li>
  <li><strong>client/</strong>: Contains the React application with components, pages, and Tailwind CSS setup.</li>
</ul>

<h2>Available Scripts</h2>

<h3>Smart Contracts Scripts</h3>
<ul>
  <li><code>npx hardhat compile</code>: Compiles the smart contracts.</li>
  <li><code>npx hardhat test</code>: Runs tests for the smart contracts.</li>
  <li><code>npx hardhat run ignition/modules/CampaignFactoryDeploy.ts --network network-name</code>: Deploys the smart contracts to the specified network.</li>
</ul>

<h3>Front-end Scripts</h3>
<ul>
  <li><code>npm run dev</code>: Runs the front-end in development mode.</li>
  <li><code>npm run build</code>: Builds the front-end for production.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for details.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

<h2>Contact</h2>
<p>If you have any questions, feel free to contact me at <a href="mailto:dvalchevvv@gmail.com">dvalchevvv@gmail.com</a>.</p>
