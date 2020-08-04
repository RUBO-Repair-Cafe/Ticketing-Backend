import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { Repository } from 'typeorm';
import { NewCustomerDto } from './dto/newcustomer.dto';
@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private _customerRepo: Repository<Customer>
  ){}

  async findAll(): Promise<Customer[]> {
    const customers = await this._customerRepo.find({relations: ['tickets']});
    if (!customers || customers.length === 0){
      throw new NotFoundException();
    }
    return customers;
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this._customerRepo.findOne(id, {relations: ['tickets']});
    if (!customer){
      throw new NotFoundException();
    }
    return customer;
  }

  createOne(newCustomerData: NewCustomerDto): Promise<Customer>{
    return this._customerRepo.save(this._customerRepo.create(newCustomerData));
  }
}