pragma solidity ^0.5.3;

contract Kisaan{
    uint farmerCount = 0;
    uint officialCount = 0;
    address owner;
    
    constructor() public{
        owner = msg.sender;
    }
    
    struct Farmer{
        uint id;
        string name;
        string password;
        uint balance;
        bool isVerified;
    }
    
    struct Offical{
        uint id;
        string name;
        string password;
        bool isValidator;
        bool isVerified;
    }
    
    mapping (address => Farmer) farmers;
    mapping (address => Offical) officials;
    
    modifier onlyOfficial(){
        require(officials[msg.sender].isVerified);
        _;
    }
    
    modifier validOfficial(){
        require(msg.sender == owner || officials[msg.sender].isValidator);
        _;
    }
    
    modifier validFarmer(address _farmerAddress){
        require(farmers[_farmerAddress].isVerified);
        _;
    }
    
    modifier notAlreadyRegisteredFarmer(address _farmerAddress){
        require(!farmers[_farmerAddress].isVerified);
        _;
    }

    modifier notAlreadyRegisteredOfficial(address _officialAddress){
        require(!officials[_officialAddress].isVerified);
        _;
    }
    
    function receivedGoods
        (address _farmerAddress, uint amount) 
        onlyOfficial() validFarmer(_farmerAddress) 
        public
    {
        farmers[_farmerAddress].balance += amount;
    }
    
    function addFarmer
        (address _farmerAddress, string memory _name, string memory _password) 
        onlyOfficial() notAlreadyRegisteredFarmer(_farmerAddress) 
        public
    {
        farmerCount++;
        farmers[_farmerAddress] = Farmer({
                                    id: farmerCount, 
                                    name: _name, 
                                    password: _password,
                                    balance: 0,
                                    isVerified: true
                                });
    }
    
    function addOfficial
        (address _officialAddress, string memory _name, string memory _password, bool _isValidator)
        validOfficial() notAlreadyRegisteredOfficial(_officialAddress)
        public
    {
        officialCount++;  
        officials[_officialAddress] = Offical({
                                        id: officialCount,
                                        name: _name,
                                        password: _password,
                                        isValidator: _isValidator,
                                        isVerified: true
                                    });
    }
    
}