import { Module } from '@nestjs/common';
import { CategoriesModule } from 'src/categories/categories.module';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { CourseCategoryResolver } from './course-category.resolver';

@Module({
  imports: [CategoriesModule],
  providers: [CoursesService, CoursesResolver, CourseCategoryResolver],
})
export class CoursesModule {}
