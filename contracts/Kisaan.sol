pragma solidity ^0.5.3;

contract Kisaan{
    uint farmerCount = 0;
    uint officialCount = 0;
    address owner;
    string ownerPassword;
    
    constructor() public{
        owner = msg.sender;
        ownerPassword = '99c1c38eac834ff0739c6bef668c9d782515721acbd2be074e3c08ecc2d18277';
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
        bool isValidator; //Can Validate other accounts to become officials
        bool isVerified; //Is a registered official
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

    event authorityLoginSuccessful(
        bool success
    );

    event officialLoginSuccessful(
        bool success
    );

    function ownerLogin
        (string memory _password)
        validOfficial()
        public
    {
        if(keccak256(bytes(ownerPassword)) == keccak256(bytes(_password)))
            emit authorityLoginSuccessful(true);
        else
            emit authorityLoginSuccessful(false);
    }

    function officialLogin
        (string memory _password)
        onlyOfficial()
        public
    {
        if(keccak256(bytes(officials[msg.sender].password)) == keccak256(bytes(_password)))
            emit officialLoginSuccessful(true);
        else
            emit officialLoginSuccessful(false);
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