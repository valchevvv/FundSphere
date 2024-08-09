import { useAccount, useConnect, useDisconnect, useReadContract } from 'wagmi'
import { readContract } from '@wagmi/core'

import { useWriteContract } from 'wagmi'
import Factory from './abi/CompaignFactory.json'
import Campaign from "./abi/Compaign.json"

const { abi: factoryAbi } = Factory
const { abi: campaignAbi } = Campaign
import { config } from './config'
import { useEffect } from 'react'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { 
    data, 
    isPending,
    writeContract 
  } = useWriteContract()

  async function submit() {   
    writeContract({
      address: '0xd4151E0D8cA47590cE10241D0b335249031c07dc',
      abi:factoryAbi,
      functionName: 'addCompaign',
      args: [String("0x22370f8F8FDFb2a132eCc8Ec85F8E741fd7BbE4D"),String("DMS Nafta"), Number(10), String("12/12/2024")],
    })
  } 

const {data: campaigns} = useReadContract({
  address: '0xd4151E0D8cA47590cE10241D0b335249031c07dc',
  abi: factoryAbi,
  functionName: 'getCompaigns',
  args: [],
})
  

 useEffect(() => {
  const get = async () => {
    const result = await readContract(config, {
      abi:campaignAbi,
      address: '0x0c00F17fAb43a9029c94B70683E0d039F7Eb9C39',
      functionName: 'targetAmmount',
    })

    console.log(result)
  }

  get()
 }, [])
  
  return (
    <>
    <span>isPedning: {isPending}</span>
    <span>hash: {data}</span>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <button onClick={submit}>asd</button>
    </>
  )
}

export default App
