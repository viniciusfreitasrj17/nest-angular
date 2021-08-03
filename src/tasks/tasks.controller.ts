import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';
import { TasksService } from './shared/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async index(): Promise<Task[]> {
    return this.taskService.index();
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Task> {
    return this.taskService.show(id);
  }

  @Post()
  async store(@Body() task: Task): Promise<Task> {
    return this.taskService.store(task);
  }

  @Put(':id')
  async edit(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    return this.taskService.edit(id, task);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    return this.taskService.destroy(id);
  }
}
