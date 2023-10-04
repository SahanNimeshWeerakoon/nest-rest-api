import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'get all items';
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Description: ${createItemDto.description}`;
    }
}
