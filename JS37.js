                       /*signUp*/
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    let usersList = [];
    let emailsList = [];
    let passwordList = [];
    function update(){
    users.forEach((item)=>{
        usersList.push(item.username);
        emailsList.push(item.email);
        passwordList.push(item.password)
    })
    }


    function signUp(name,userEmail,userPassword){

            if(usersList.includes(name)){
                console.log("You already have an accont");
            }
            else if(emailsList.includes(userEmail)){
                console.log("You already have an accont"); 
            }
            else if(passwordList.includes(userPassword)){
                console.log("You already have an accont");
            }
            else{
                 let  newId = Math.random().toString(16).slice(9);
                 let now = new Date();
                let newUser = {
                     _id: newId,
                    username: name,
                    email: userEmail,
                    password: userPassword,
                    createdAt: now,
                    isLoggedIn: false

                }
                users.push(newUser);
                update();
                console.log("Account created successfully");
            }
        }
    

    signUp("usha","ur220@gmail.com","4444");
    

                        
