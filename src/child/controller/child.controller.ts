import { Controller } from '@nestjs/common';
import { MyNurseryBaseController } from 'src/shared/controller/base.controller';
import { Child } from '../entities/child.entity';

@Controller('child')
export class ChildController extends MyNurseryBaseController<Child> {}