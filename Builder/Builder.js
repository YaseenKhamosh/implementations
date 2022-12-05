var CreateBuilder1 = /** @class */ (function () {
    function CreateBuilder1() {
        this.reset();
    }
    CreateBuilder1.prototype.reset = function () {
        this.product = new Product();
    };
    CreateBuilder1.prototype.productPartA = function () {
        this.product.parts.push('PartA');
    };
    CreateBuilder1.prototype.productPartB = function () {
        this.product.parts.push('PartB');
    };
    CreateBuilder1.prototype.productPartC = function () {
        this.product.parts.push('PartC');
    };
    CreateBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return CreateBuilder1;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    Product.prototype.listParts = function () {
        console.log("Product parts: ".concat(this.parts.join(', '), "\n"));
    };
    return Product;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.productPartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.productPartA();
        this.builder.productPartB();
        this.builder.productPartC();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new CreateBuilder1();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.productPartA();
    builder.productPartB();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
