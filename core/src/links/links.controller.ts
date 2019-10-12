import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';
import { Link } from './interfaces/link.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    console.log('create')
    console.log(createLinkDto)
    const res = await this.linksService.create(createLinkDto)

    return res
  }

  @Get()
  async findAll(): Promise<Link[]> {
    console.log('findAll')
    return this.linksService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id) {
    console.log('find', id)
    const res = await this.linksService.find(id);
    return res
  }
}
