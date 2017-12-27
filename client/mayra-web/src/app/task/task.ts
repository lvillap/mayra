export class Task {

  id: string;
  name: string;
  description: string;
  estimated: number;
  dueDate: string;
  tags: string[] = [];
  subtasks: Task[] = [];
  comments: any[] = [];
  attachments: string[] = [];
  history: any[] = [];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.subtasks = data.subtasks;
  }
}
