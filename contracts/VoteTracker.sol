pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;
import "./VoteLibrary.sol";

contract VoteTracker
{
    string public secret = "123456";

    mapping(uint => VoteLibrary.Vote) public VoteStore;
    uint256 public voterCount = 0;

    mapping(uint => VoteLibrary.Vote1) public VoteStore1;
    uint256 public voterCount1 = 0;

    mapping(uint => VoteLibrary.Vote2) public VoteStore2;
    uint256 public voterCount2 = 0;

    mapping(uint => VoteLibrary.Vote3) public VoteStore3;
    uint256 public voterCount3 = 0;
    
    mapping(uint => VoteLibrary.Vote4) public VoteStore4;
    uint256 public voterCount4 = 0;

    mapping(uint => VoteLibrary.Party) public PartyStore;
    uint256 public partyCount = 0;

    mapping(uint => VoteLibrary.Party1) public PartyStore1;
    uint256 public partyCount1 = 0;

    mapping(uint => VoteLibrary.Party2) public PartyStore2;
    uint256 public partyCount2 = 0;

    mapping(uint => VoteLibrary.Party3) public PartyStore3;
    uint256 public partyCount3 = 0;

    mapping(uint => VoteLibrary.Party4) public PartyStore4;
    uint256 public partyCount4 = 0;

    mapping(uint => VoteLibrary.Identity) public IdentityStore;
    uint256 public identityCount = 0;
   

    function registerUser(string memory _adhaarNumber, string memory _email) public returns(uint256)
    {
       // require(checkIfAccCanExist(_add));
        require(checkIfIdCanExist(_adhaarNumber));
        identityCount++;
      
        IdentityStore[identityCount] = VoteLibrary.Identity(identityCount,_adhaarNumber,_email);
        emit IdentityCreate(identityCount,_adhaarNumber,_email);
        
    }
    function getidcount() public returns(uint256){
        return identityCount;
    }

    function generateVote(string memory _partyName, string memory _adhaar) public returns(uint256)
    {
       // require(!checkIfAccCanExist(_adder));
        //require(!checkIfIdCanExist(_adhaar));
        require(checkIfCanVote(_adhaar));
        require(!checkIfCanExist(_partyName));
        voterCount++;
        VoteStore[voterCount] = VoteLibrary.Vote(voterCount, _partyName, _adhaar);
        uint partyIndex = getParty(_partyName);
        PartyStore[partyIndex].voteCount++;
        emit VoteGenerate(voterCount, _partyName, _adhaar);
        
    }
    function generateVoteA(string memory _partyName1, string memory _adhaarA) public returns(uint256)
    {
       // require(!checkIfAccCanExist(_adder));
       // require(!checkIfIdCanExist(_adhaarA));
        require(checkIfCanVoteA(_adhaarA));
        require(!checkIfCanExistA(_partyName1));
        voterCount1++;
        VoteStore1[voterCount1] = VoteLibrary.Vote1(voterCount1, _partyName1, _adhaarA);
        uint partyIndex1 = getPartyA(_partyName1);
        PartyStore1[partyIndex1].voteCount1++;
        emit VoteGenerateA(voterCount, _partyName1, _adhaarA);
        
    }
    function generateVoteB(string memory _partyName2, string memory _adhaarB) public returns(uint256)
    {
       // require(!checkIfAccCanExist(_adder));
       // require(!checkIfIdCanExist(_adhaarB));
        require(checkIfCanVoteB(_adhaarB));
        require(!checkIfCanExistB(_partyName2));
        voterCount2++;
        VoteStore2[voterCount2] = VoteLibrary.Vote2(voterCount2, _partyName2, _adhaarB);
        uint partyIndex2 = getPartyB(_partyName2);
        PartyStore2[partyIndex2].voteCount2++;
        emit VoteGenerateB(voterCount2, _partyName2, _adhaarB);
        
    }
    function generateVoteC(string memory _partyName3, string memory _adhaarC) public returns(uint256)
    {
       // require(!checkIfAccCanExist(_adder));
       // require(!checkIfIdCanExist(_adhaarC));
        require(checkIfCanVoteC(_adhaarC));
        require(!checkIfCanExistC(_partyName3));
        voterCount3++;
        VoteStore3[voterCount3] = VoteLibrary.Vote3(voterCount3, _partyName3, _adhaarC);
        uint partyIndex3 = getPartyC(_partyName3);
        PartyStore3[partyIndex3].voteCount3++;
        emit VoteGenerateC(voterCount3, _partyName3, _adhaarC);
        
    }
    function generateVoteD(string memory _partyName4, string memory _adhaarD) public returns(uint256)
    {
       // require(!checkIfAccCanExist(_adder));
       // require(!checkIfIdCanExist(_adhaarD));
        require(checkIfCanVoteD(_adhaarD));
        require(!checkIfCanExistD(_partyName4));
        voterCount4++;
        VoteStore4[voterCount4] = VoteLibrary.Vote4(voterCount4, _partyName4, _adhaarD);
        uint partyIndex4 = getPartyD(_partyName4);
        PartyStore4[partyIndex4].voteCount4++;
        emit VoteGenerateD(voterCount4, _partyName4, _adhaarD);
        
    }

    /*function getvotecount() public returns(uint256)
    {
    return voterCount;

    }*/
    
    
    function createParty(string memory _name) public returns(uint256)
    {
        require(checkIfCanExist(_name));
        partyCount++;
        PartyStore[partyCount] = VoteLibrary.Party(_name, 0);
        emit PartyCreate(_name, 0);
    }
    function createPartyA(string memory _name1) public returns(uint256)
    {
        require(checkIfCanExistA(_name1));
        partyCount1++;
        PartyStore1[partyCount1] = VoteLibrary.Party1(_name1, 0);
        emit PartyCreateA(_name1, 0);
    }
    function createPartyB(string memory _name2) public returns(uint256)
    {
        require(checkIfCanExistB(_name2));
        partyCount2++;
        PartyStore2[partyCount2] = VoteLibrary.Party2(_name2, 0);
        emit PartyCreateB(_name2, 0);
    }
    function createPartyC(string memory _name3) public returns(uint256)
    {
        require(checkIfCanExistC(_name3));
        partyCount3++;
        PartyStore3[partyCount3] = VoteLibrary.Party3(_name3, 0);
        emit PartyCreateC(_name3, 0);
    }
    function createPartyD(string memory _name4) public returns(uint256)
    {
        require(checkIfCanExistD(_name4));
        partyCount4++;
        PartyStore4[partyCount4] = VoteLibrary.Party4(_name4, 0);
        emit PartyCreateD(_name4, 0);
    }

    function getAdminKey() public returns(string memory)
    {
        return secret;
    }

    function checkIfCanExist(string memory _namer) private returns(bool)
    {
        for(uint i=1;i<=partyCount;i++)
        {
            string memory partyNamed = PartyStore[i].name;
            if(keccak256(abi.encodePacked((partyNamed))) == keccak256(abi.encodePacked((_namer))))
            {
                return false;
            }
        }
        return true;
    }
    function checkIfCanExistA(string memory _namerA) private returns(bool)
    {
        for(uint i=1;i<=partyCount1;i++)
        {
            string memory partyNamedA = PartyStore1[i].name1;
            if(keccak256(abi.encodePacked((partyNamedA))) == keccak256(abi.encodePacked((_namerA))))
            {
                return false;
            }
        }
        return true;
    }
    function checkIfCanExistB(string memory _namerB) private returns(bool)
    {
        for(uint i=1;i<=partyCount2;i++)
        {
            string memory partyNamedB = PartyStore2[i].name2;
            if(keccak256(abi.encodePacked((partyNamedB))) == keccak256(abi.encodePacked((_namerB))))
            {
                return false;
            }
        }
        return true;
    }
    function checkIfCanExistC(string memory _namerC) private returns(bool)
    {
        for(uint i=1;i<=partyCount3;i++)
        {
            string memory partyNamedC = PartyStore3[i].name3;
            if(keccak256(abi.encodePacked((partyNamedC))) == keccak256(abi.encodePacked((_namerC))))
            {
                return false;
            }
        }
        return true;
    }
    function checkIfCanExistD(string memory _namerD) private returns(bool)
    {
        for(uint i=1;i<=partyCount4;i++)
        {
            string memory partyNamedD = PartyStore4[i].name4;
            if(keccak256(abi.encodePacked((partyNamedD))) == keccak256(abi.encodePacked((_namerD))))
            {
                return false;
            }
        }
        return true;
    }

    function checkIfIdCanExist(string memory _namered) private returns(bool)
    {
        for(uint i=1;i<=identityCount;i++)
        {
            string memory idNamed = IdentityStore[i].adhaarNumber;
            if(keccak256(abi.encodePacked((idNamed))) == keccak256(abi.encodePacked((_namered))))
            {
                return false;
            }
        }
        return true;
    }

    /**function checkIfAccCanExist(string memory _namerer) private returns(bool)
    {
        for(uint i=1;i<=identityCount;i++)
        {
            string memory idNamed = IdentityStore[i].add;
            if(keccak256(abi.encodePacked((idNamed))) == keccak256(abi.encodePacked((_namerer))))
            {
                return false;
            }
        }
        return true;
    }*/

    function checkIfCanVote(string memory _adhaarer) private returns(bool)
    {
        for(uint i=1;i<=voterCount;i++)
        {
            string memory voteNamed = VoteStore[i].adhaar;
            if(keccak256(abi.encodePacked((voteNamed))) == keccak256(abi.encodePacked((_adhaarer))))
            {
                return false;
            }
        }
        return true;
    }
     function checkIfCanVoteA(string memory _adhaarerA) private returns(bool)
    {
        for(uint i=1;i<=voterCount1;i++)
        {
            string memory voteNamedA = VoteStore1[i].adhaarA;
            if(keccak256(abi.encodePacked((voteNamedA))) == keccak256(abi.encodePacked((_adhaarerA))))
            {
                return false;
            }
        }
        return true;
    }
     function checkIfCanVoteB(string memory _adhaarerB) private returns(bool)
    {
        for(uint i=1;i<=voterCount2;i++)
        {
            string memory voteNamedB = VoteStore2[i].adhaarB;
            if(keccak256(abi.encodePacked((voteNamedB))) == keccak256(abi.encodePacked((_adhaarerB))))
            {
                return false;
            }
        }
        return true;
    }
     function checkIfCanVoteC(string memory _adhaarerC) private returns(bool)
    {
        for(uint i=1;i<=voterCount3;i++)
        {
            string memory voteNamedC = VoteStore3[i].adhaarC;
            if(keccak256(abi.encodePacked((voteNamedC))) == keccak256(abi.encodePacked((_adhaarerC))))
            {
                return false;
            }
        }
        return true;
    }
     function checkIfCanVoteD(string memory _adhaarerD) private returns(bool)
    {
        for(uint i=1;i<=voterCount4;i++)
        {
            string memory voteNamedD = VoteStore4[i].adhaarD;
            if(keccak256(abi.encodePacked((voteNamedD))) == keccak256(abi.encodePacked((_adhaarerD))))
            {
                return false;
            }
        }
        return true;
    }

    function getParty(string memory _partyNamer) public returns (uint)
    {
        for(uint i=1;i<=partyCount;i++)
        {
            string memory partyNamed = PartyStore[i].name;
            if(keccak256(abi.encodePacked((partyNamed))) == keccak256(abi.encodePacked((_partyNamer))))
            {
                return i;
            }
        }
    }
    function getPartyA(string memory _partyNamerA) public returns (uint)
    {
        for(uint i=1;i<=partyCount1;i++)
        {
            string memory partyNamedA = PartyStore1[i].name1;
            if(keccak256(abi.encodePacked((partyNamedA))) == keccak256(abi.encodePacked((_partyNamerA))))
            {
                return i;
            }
        }
    }
    function getPartyB(string memory _partyNamerB) public returns (uint)
    {
        for(uint i=1;i<=partyCount2;i++)
        {
            string memory partyNamedB = PartyStore2[i].name2;
            if(keccak256(abi.encodePacked((partyNamedB))) == keccak256(abi.encodePacked((_partyNamerB))))
            {
                return i;
            }
        }
    }
    function getPartyC(string memory _partyNamerC) public returns (uint)
    {
        for(uint i=1;i<=partyCount3;i++)
        {
            string memory partyNamedC = PartyStore3[i].name3;
            if(keccak256(abi.encodePacked((partyNamedC))) == keccak256(abi.encodePacked((_partyNamerC))))
            {
                return i;
            }
        }
    }
    function getPartyD(string memory _partyNamerD) public returns (uint)
    {
        for(uint i=1;i<=partyCount4;i++)
        {
            string memory partyNamedD = PartyStore4[i].name4;
            if(keccak256(abi.encodePacked((partyNamedD))) == keccak256(abi.encodePacked((_partyNamerD))))
            {
                return i;
            }
        }
    }
    function getemail(string memory _adm) public returns(string memory)
    {
        for(uint i=1;i<=identityCount;i++)
        {
        string memory admnum = IdentityStore[i].adhaarNumber;
        if(keccak256(abi.encodePacked((admnum))) == keccak256(abi.encodePacked((_adm))))
        {
         return IdentityStore[i].email;
        }
    }
}

    function getPartyCount() public returns (uint)
    {
        return partyCount;
    }
    function getPartyCountA() public returns (uint)
    {
        return partyCount1;
    }
    function getPartyCountB() public returns (uint)
    {
        return partyCount2;
    }
    function getPartyCountC() public returns (uint)
    {
        return partyCount3;
    }
    function getPartyCountD() public returns (uint)
    {
        return partyCount4;
    }
    function getNames(uint _id) public returns(uint,string memory)
    {
        require(_id<=partyCount);
        return (PartyStore[_id].voteCount,PartyStore[_id].name);
    }
    function getNamesA(uint _id1) public returns(uint,string memory)
    {
        require(_id1<=partyCount1);
        return (PartyStore1[_id1].voteCount1,PartyStore1[_id1].name1);
    }
    function getNamesB(uint _id2) public returns(uint,string memory)
    {
        require(_id2<=partyCount2);
        return (PartyStore2[_id2].voteCount2,PartyStore2[_id2].name2);
    }
    function getNamesC(uint _id3) public returns(uint,string memory)
    {
        require(_id3<=partyCount3);
        return (PartyStore3[_id3].voteCount3,PartyStore3[_id3].name3);
    }
    function getNamesD(uint _id4) public returns(uint,string memory)
    {
        require(_id4<=partyCount4);
        return (PartyStore4[_id4].voteCount4,PartyStore4[_id4].name4);
    }

    event IdentityCreate(uint add, string adhaarNumber, string email);
    event PartyCreate(string name, uint voteCount);
    event PartyCreateA(string name1, uint voteCount1);
    event PartyCreateB(string name2, uint voteCount2);
    event PartyCreateC(string name3, uint voteCount3);
    event PartyCreateD(string name4, uint voteCount4);
    event VoteGenerate(uint voteCount, string partyName, string adhaar);
    event VoteGenerateA(uint voteCount1, string partyName1, string adhaarA);
    event VoteGenerateB(uint voteCount2, string partyName2, string adhaarB);
    event VoteGenerateC(uint voteCount3, string partyName3, string adhaarC);
    event VoteGenerateD(uint voteCount4, string partyName4, string adhaarD);
}