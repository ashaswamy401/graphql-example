import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';

@Resolver('Items')
export class ItemsResolver {

    constructor(private readonly itemsService: ItemsService) { }

    @Query(() => [ItemType])
    async items(): Promise<ItemType[]> {
        return this.itemsService.findAll();
    }

    @Mutation(() => ItemType)
    async createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
        console.log(input);
        return this.itemsService.createOrUpdate({...input});
    }

    @Mutation(() => ItemType)
    async updateItem(
        @Args('input') input: ItemInput
    ): Promise<ItemInput> {
        return this.itemsService.createOrUpdate(input);
    }

    @Mutation(() => ItemType)
    async deleteItem(@Args('id') id: string) {
        return this.itemsService.delete(id);
    }
}
