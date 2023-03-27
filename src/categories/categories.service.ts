import { Injectable } from '@nestjs/common';
import { Category, CreateCategoryInput } from 'src/graphql.schema';

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = [];

  findAll(): Category[] {
    return this.categories;
  }

  findById(id: number): Category {
    return this.categories.find((category) => category.id === id);
  }

  create(newCategory: CreateCategoryInput): Category {
    const id = this.categories.length + 1;
    const category = { ...newCategory, id };
    this.categories.push(category);

    return category;
  }
}
