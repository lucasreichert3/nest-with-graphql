
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    name: string;
    description?: Nullable<string>;
}

export class CreateCourseInput {
    name: string;
    description?: Nullable<string>;
    categoryId: number;
}

export class Category {
    id: number;
    name: string;
    description?: Nullable<string>;
    courses?: Nullable<Course[]>;
}

export class Course {
    id: number;
    name: string;
    description?: Nullable<string>;
    category: Category;
}

export abstract class IQuery {
    abstract categories(): Nullable<Category[]> | Promise<Nullable<Category[]>>;

    abstract courses(): Nullable<Course[]> | Promise<Nullable<Course[]>>;

    abstract course(id: string): Nullable<Course> | Promise<Nullable<Course>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract createCourse(createCourseInput: CreateCourseInput): Course | Promise<Course>;
}

type Nullable<T> = T | null;
