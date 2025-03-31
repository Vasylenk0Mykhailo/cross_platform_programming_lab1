import { TabService } from './tab.service';
import { LogService } from '../logger/log.service';

describe('TabService', () => {
  let service: TabService;
  let logService: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    logService = jasmine.createSpyObj('LogService', ['log']);
    service = new TabService(logService);
  });

  it('should calculate arctan correctly', () => {
    const x = 0.1;
    const expected = Math.atan(x);
    const result = service.calculate(x);
    expect(result).toBeCloseTo(expected, 4);
    expect(logService.log).toHaveBeenCalled();
  });

  it('should tabulate correctly', () => {
    const results = service.tabulate(-0.5, 0.5, 0.1);
    expect(results.length).toBeGreaterThan(0);
    results.forEach(item => {
      expect(Math.atan(item.x)).toBeCloseTo(item.y, 4);
    });
  });
});