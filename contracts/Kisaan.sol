pragma solidity ^0.5.3;

contract Kisaan{
    uint farmerCount = 0;
    uint officialCount = 0;
    address owner;
    string ownerPassword;
    
    constructor() public{
        owner = msg.sender;
        ownerPassword = 'b68fe43f0d1a0d7aef123722670be50268e15365401c442f8806ef83b612976b';
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
    
    modifier onlyOfficial(string memory _password){
        require(officials[msg.sender].isVerified && keccak256(bytes(_password)) == keccak256(bytes(officials[msg.sender].password)));
        _;
    }
    
    modifier validOfficial(string memory _password){
        require((msg.sender == owner && keccak256(bytes(ownerPassword)) == keccak256(bytes(_password)))
            || (officials[msg.sender].isValidator && keccak256(bytes(officials[msg.sender].password)) == keccak256(bytes(_password))));
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

    // event authorityLoginSuccessful(
    //     bool success
    // );

    // event officialLoginSuccessful(
    //     bool success
    // );

    // event receivedGoodsSuccessful(
    //     bool success
    // );

    // event addFarmerSuccessful(
    //     bool success
    // );

    // event addOfficialSuccessful(
    //     bool success
    // );

    function ownerLogin
        (string memory _password)
        validOfficial(_password) 
        public
    {
        
    }

    function officialLogin
        (string memory _password)
        onlyOfficial(_password)
        public
    {
        
    }
    
    function receivedGoods
        (string memory _password, address _farmerAddress, uint amount) 
        onlyOfficial(_password) validFarmer(_farmerAddress) 
        public
    {
        farmers[_farmerAddress].balance += amount;
        // emit receivedGoodsSuccessful(true);
    }
    
    function addFarmer
        (string memory _officialPassword, address _farmerAddress, string memory _name, string memory _password) 
        onlyOfficial(_officialPassword) notAlreadyRegisteredFarmer(_farmerAddress) 
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
        // emit addFarmerSuccessful(true);
    }
    
    function addOfficial
        (string memory _officialPassword, address _officialAddress, string memory _name, string memory _password, bool _isValidator)
        validOfficial(_officialPassword) notAlreadyRegisteredOfficial(_officialAddress)
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
        // emit addOfficialSuccessful(true);
    }
    
}