export type ProductProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductModel = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductList = {
  products: Array<ProductProps>;
  count: number;
};

export class Product {
  constructor(private readonly props: ProductProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get brand() {
    return this.props.brand;
  }

  get description() {
    return this.props.description;
  }

  get photo() {
    return this.props.photo;
  }

  get price() {
    return this.props.price;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  toJson(): ProductModel {
    return {
      id: this.id,
      name: this.name,
      brand: this.brand,
      description: this.description,
      photo: this.photo,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
