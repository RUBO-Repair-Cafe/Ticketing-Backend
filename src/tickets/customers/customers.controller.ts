import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { Customer } from './customers.entity';
import { NewCustomerDto } from './dto/newcustomer.dto';

@ApiTags('customers')
@ApiBearerAuth()
@Controller('customers')
export class CustomersController {
  constructor(private _customerService: CustomersService){}

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAll(): Promise<Customer[]>{
    return this._customerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one customer' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getOne(@Param('id') customerId: number): Promise<Customer>{
    return this._customerService.findOne(customerId);
  }

  @Post()
  @ApiOperation({ summary: 'Create new customer' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createOne(@Body() newCustomerData: NewCustomerDto): Promise<Customer>{
    return this._customerService.createOne(newCustomerData);
  }
}
