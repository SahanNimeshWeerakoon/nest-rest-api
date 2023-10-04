import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'get all items';
    }

    @Get(":id")
    findOne(@Param() param): string {
        return `Item: ${param.id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Description: ${createItemDto.description}`;
    }

    @Put(":id")
    update(@Body() updateItemDto: CreateItemDto, @Param("id") id): string {
        return `updated ${id} with the Name: ${updateItemDto.name}`
    }

    @Delete(":id")
    delete(@Param("id") id) {
        return `Deleted item with ID - ${id}`;
    }
}
