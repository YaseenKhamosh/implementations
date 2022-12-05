class SingleTon {
    private static instance: SingleTon;
    private constructor(){}

    public static getInstance():SingleTon{
        if(!SingleTon.instance){
            SingleTon.instance = new SingleTon()
        }
        return SingleTon.instance;
    }

}

function test(){
    const firstInstance = SingleTon.getInstance();
    const secInstance = SingleTon.getInstance();
    if(firstInstance === secInstance){
        console.log('well done its working...');
    }else{
        console.log('WTH its not working!!!!');
        
    }
}

test()