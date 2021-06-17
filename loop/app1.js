let animals = ['cat','rabbit', 'dog', 'parrot'];
for( i =0; i< animals.length; i++){
    if (animals[i] == "rabbit"){
        console.log('this is rabbit on index',[i])
        break;
    }
    else{
        console.log('this is not rabbit')
    }
}
