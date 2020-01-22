class Boat {
  color: string = 'green';

  get formattedColor(): string {
    return `Boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('pilot');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = () => {
    try {
      method();
    } catch (e) {
      console.log('error: ', e);
    }
  };
}
