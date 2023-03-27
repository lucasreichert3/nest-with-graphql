import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoriesService } from 'src/categories/categories.service';
import { Category, Course } from 'src/graphql.schema';

@Resolver('Course')
export class CourseCategoryResolver {
  constructor(private categoryService: CategoriesService) {}

  @ResolveField()
  async category(
    @Parent() course: Course & { categoryId: number },
  ): Promise<Category> {
    return this.categoryService.findById(course.categoryId);
  }
}
