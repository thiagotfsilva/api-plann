import InsuranceType from '../enum/insureanceType';

class Insurance {
  constructor(
    private clientId: string,
    private type: InsuranceType,
    private value: number,
    private id?: string
  ) {}

  getId(): string | undefined {
    return this.id;
  }

  getClientId(): string {
    return this.clientId;
  }

  getType(): InsuranceType {
    return this.type;
  }

  getValue(): number {
    return this.value;
  }

}

export default Insurance;
