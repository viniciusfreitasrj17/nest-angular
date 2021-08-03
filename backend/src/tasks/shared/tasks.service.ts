import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  index = async () => await this.taskModel.find().exec();

  show = async (id: string) => await this.taskModel.findById(id).exec();

  store = async (task: Task) => {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  };

  edit = async (id: string, task: Task) =>
    await this.taskModel.updateOne({ _id: id }, task).exec();

  destroy = async (id: string) =>
    await this.taskModel.deleteOne({ _id: id }).exec();
}
