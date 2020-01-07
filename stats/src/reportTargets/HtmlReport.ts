import fs from 'fs';
import { OutputTarger } from '../Summary';

export class HtmlReport implements OutputTarger {
  print(report: string): void {
    const html = `
      <div>
        <h3>Analyzis</h3>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync('report.html', html);
  }
}
