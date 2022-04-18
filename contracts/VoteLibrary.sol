pragma solidity >=0.4.21 <0.7.0;

library VoteLibrary
{
    struct Vote
    {
        uint id;
        string PartyName;
        string adhaar;
    }
    struct Vote1
    {
        uint id1;
        string PartyName1;
        string adhaarA;
    }
    struct Vote2
    {
        uint id2;
        string PartyName3;
        string adhaarB;
    }
    struct Vote3
    {
        uint id3;
        string PartyName3;
        string adhaarC;
    }
    struct Vote4
    {
        uint id4;
        string PartyName4;
        string adhaarD;
    }
    struct Party
    {
        string name;
        uint voteCount;
    }

    struct Party1
    {
        string name1;
        uint voteCount1;
    }

    struct Party2
    {
        string name2;
        uint voteCount2;
    }

    struct Party3
    {
        string name3;
        uint voteCount3;
    }

    struct Party4
    {
        string name4;
        uint voteCount4;
    }
    
    struct Identity
    {
        uint add;
        string adhaarNumber;
        string email;
    }
}