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
        return this.itemsService.create(input);
    }

    // @Mutation(() => ItemType)
    // async updateItem(
    //     @Args('id') id: string,
    //     @Args('input') input: ItemInput
    // ): Promise<ItemInput> {
    //     return this.itemsService.update(id, input);
    // }

    // async deleteItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    //     return this.itemsService.delete(input);
    // }
}
