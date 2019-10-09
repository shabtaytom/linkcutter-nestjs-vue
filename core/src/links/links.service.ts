import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Link } from './interfaces/link.interface'
import { CreateLinkDto } from './dto/create-link.dto'
import { generateRandomString } from '../common/common'

@Injectable()
export class LinksService {
  constructor(@InjectModel('Link') private readonly linkModel: Model<Link>) { }

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const createdLink = new this.linkModel(createLinkDto);
    const linkId = await this.generateLinkId(20)
    createdLink.id = linkId
    return await createdLink.save();
  }

  async findAll(): Promise<Link[]> {
    return await this.linkModel.find().exec();
  }

  async find(id): Promise<Link[]> {
    return await this.linkModel.find({ id }).exec();
  }

  async isLinkIdUnique(id) {
    const links = await this.linkModel.find({ id }).exec()
    return links.length <= 0
  }

  async generateLinkId(maxRetries: number) {
    while (maxRetries > 0) {
      const randStr = generateRandomString(2)
      const valid = await this.isLinkIdUnique(randStr)
      if (valid) {
        return randStr
      }
      maxRetries--
    }
    throw new Error('generateLinkId max retries exceeded')

  }

}
