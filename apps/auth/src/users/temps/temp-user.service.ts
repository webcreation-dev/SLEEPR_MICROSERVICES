import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class TempUserService {
  private tempUsers: Map<string, CreateUserDto> = new Map();

  storeTempUser(email: string, userDto: CreateUserDto) {
    this.tempUsers.set(email, userDto);
  }

  getTempUser(email: string): CreateUserDto | undefined {
    return this.tempUsers.get(email);
  }

  removeTempUser(email: string) {
    this.tempUsers.delete(email);
  }

  clearAllTempUsers() {
    this.tempUsers.clear();
  }
}
