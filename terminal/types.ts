
export interface Line {
  id: number;
  type: 'command' | 'output';
  text: string;
  prompt: string;
}

export interface CommandStep {
  type: 'command' | 'output';
  text: string;
  prompt?: string;
}
