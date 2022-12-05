var SingleTon = /** @class */ (function () {
    function SingleTon() {
    }
    SingleTon.getInstance = function () {
        if (!SingleTon.instance) {
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    };
    return SingleTon;
}());
function test() {
    var firstInstance = SingleTon.getInstance();
    var secInstance = SingleTon.getInstance();
    if (firstInstance === secInstance) {
        console.log('well done its working...');
    }
    else {
        console.log('WTH its not working!!!!');
    }
}
test();
