import { useState,useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
// import Title from "./Title";

// import Contract from "./Contract";
import Vote from "./Vote";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Index() {
  const { state } = useEth();
  const [proposals, setProposals] = useState([""])
  const { state: { contract, accounts } } = useEth()

  const fetchProposals = async () => {
    if (!contract || !accounts) {
        return
    }
    const proposalsEvents = await contract.getPastEvents("ProposalRegistered",
        {
            fromBlock: 0,
            toBlock: "latest"
        })
    const propsLength = proposalsEvents.length
    const propsList = []
    for (let i = 1 ; i < propsLength+1 ; i ++){
        const proposalObj = await contract.methods.getOneProposal(i).call({from : accounts[0]})
        propsList.push(proposalObj[0])
    }
    setProposals(propsList)
}

useEffect(() => {
    fetchProposals()
}, [])

  
  const demo =
    <>
      <div className="contract-container">
        <Vote proposals={proposals} setProposals={setProposals} />
        

      </div>
    </>;

  return (
    <div className="demo">
      {/* <Title /> */}
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Index;
