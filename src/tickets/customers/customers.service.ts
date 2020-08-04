import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private _customerRepo: Repository<Customer>
  ){}

  findAll(): Promise<Customer[]> {
    return this._customerRepo.find({relations: ['tickets']});
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this._customerRepo.findOne(id, {relations: ['tickets']});

    if (!customer){
      throw new NotFoundException();
    }

    return customer
  }
}