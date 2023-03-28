import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from 'src/graphql.schema';
import { CourseEntity } from './course.model';

@Injectable()
export class CoursesService {
  private readonly courses: CourseEntity[] = [];

  findAll(): CourseEntity[] {
    return this.courses;
  }

  create(createCourse: CreateCourseInput): CourseEntity {
    const id = this.create.length + 1;
    const course: CourseEntity = { ...createCourse, id };

    this.courses.push(course);

    return course;
  }

  findById(id: number): CourseEntity {
    return this.courses.find((course) => course.id === id);
  }
}
