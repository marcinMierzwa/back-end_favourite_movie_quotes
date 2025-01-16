import { IsIn, IsInt, IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
    @IsInt()
    @IsOptional()
    readonly skip: number;
  
    @IsInt()
    @IsOptional()
    readonly limit: number;
  }
  
