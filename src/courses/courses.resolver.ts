import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateCategoryInput, CreateCourseInput } from 'src/graphql.schema';
import { CoursesService } from './courses.service';

@Resolver('Course')
export class CoursesResolver {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Query('courses')
  async getCourses() {
    return this.coursesService.findAll();
  }

  @Query('course')
  async getCourse(
    @Args('id', ParseIntPipe)
    id: number,
  ) {
    return this.coursesService.findById(id);
  }

  @Query('categories')
  async getCategories() {
    return this.categoriesService.findAll();
  }

  @Mutation('createCourse')
  async createCourse(@Args('createCourseInput') args: CreateCourseInput) {
    return this.coursesService.create(args);
  }

  @Mutation('createCategory')
  async createCategories(
    @Args('createCategoryInput') args: CreateCategoryInput,
  ) {
    return this.categoriesService.create(args);
  }
}
