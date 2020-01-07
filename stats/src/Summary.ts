import { MatchData } from './MatchData';

export interface Analyzer {
  run(mathes: MatchData[]): string;
}

export interface OutputTarger {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outPutTarger: OutputTarger) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const outPut = this.analyzer.run(matches);
    this.outPutTarger.print(outPut);
  }
}
