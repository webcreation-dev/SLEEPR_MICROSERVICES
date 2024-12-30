import { DataSource } from 'typeorm';
export declare class SeedingService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    seed(): Promise<void>;
}
