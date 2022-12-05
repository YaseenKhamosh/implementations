interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

class CreateBuilder1 implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  productPartA(): void {
    this.product.parts.push("PartA");
  }
  productPartB(): void {
    this.product.parts.push("PartB");
  }
  productPartC(): void {
    this.product.parts.push("PartC");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

class Director {
  private builder: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.productPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.productPartA();
    this.builder.productPartB();
    this.builder.productPartC();
  }
}

function clientCode(director: Director) {
  const builder = new CreateBuilder1();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Remember, the Builder pattern can be used without a Director class.
  console.log("Custom product:");
  builder.productPartA();
  builder.productPartB();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
