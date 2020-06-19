import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { ItemInput } from './input-items.input';
import { ItemType } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private itemRepo: Repository<Item>) { }

    async createOrUpdate(createItemDto: ItemInput): Promise<ItemType> {
        console.log(createItemDto);
        const createdItem = await this.itemRepo.save(createItemDto);
        return createdItem;
    }

    async findAll(): Promise<ItemType[]> {
        return await this.itemRepo.find();
    }

    async findOne(id): Promise<ItemType> {
        return await this.itemRepo.findOne(id);
    }

    async delete(id: string) {

        const delItem = await this.itemRepo.delete(id);
        // console.log(delItem);
        return id;
    }
}
