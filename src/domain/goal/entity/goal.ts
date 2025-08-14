import { GoalType } from "../enum/goalType";

export class Goal {
  constructor(
    private clientId: string,
    private type: GoalType,
    private targetValue: number,
    private targetDate: Date,
    private id?: string,
    /* private createdAt?: Date,
    private updatedAt?: Date */
  ) {}

  getId(): string | undefined {
    return this.id;
  }

  /* getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  } */

  getClientId(): string {
    return this.clientId;
  }

  getType(): GoalType {
    return this.type;
  }

  getTargetValue(): number {
    return this.targetValue;
  }

  getTargetDate(): Date {
    return this.targetDate;
  }
}
