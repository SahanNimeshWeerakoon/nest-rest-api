import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        { id: "1", name: "Sahan", description: "this is the descriptino", qty: "5" },
        { id: "2", name: "Sathika", description: "this is the descriptino", qty: "5" },
        { id: "3", name: "Tharangani", description: "this is the descriptino", qty: "5" },
    ];

    findAll(): Item[] {
        return this.items;
    }
}
