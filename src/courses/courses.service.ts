import { Injectable } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { Course, CreateCourseInput } from 'src/graphql.schema';

@Injectable()
export class CoursesService {
  private readonly courses: Course[] = [];

  constructor(private categoriesService: CategoriesService) {}

  findAll(): Course[] {
    return this.courses;
  }

  create(newCourse: CreateCourseInput): Course {
    const id = this.create.length + 1;
    const category = this.categoriesService.findById(newCourse.categoryId);
    const course: Course = { ...newCourse, id, category };
    this.courses.push(course);

    return course;
  }

  findById(id: number): Course {
    return this.courses.find((course) => course.id === id);
  }
}
