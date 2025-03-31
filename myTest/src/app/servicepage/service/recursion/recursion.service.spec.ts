import { RecursionService } from './recursion.service';
import { LogService } from '../logger/log.service';

describe('RecursionService', () => {
  let service: RecursionService;
  let logService: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    logService = jasmine.createSpyObj('LogService', ['log']);
    service = new RecursionService(logService);
  });

  it('should calculate recursively correctly for x=0.1', () => {
    const x = 0.1;
    const expected = Math.atan(x);
    const result = service.calculateRecursive(x);
    expect(result).toBeCloseTo(expected, 4);
    expect(logService.log).toHaveBeenCalled();
  });

  it('should tabulate recursively correctly', () => {
    const results = service.tabulateRecursive(-0.5, 0.5, 0.1);
    expect(results.length).toBeGreaterThan(0);
    results.forEach(item => {
      expect(Math.atan(item.x)).toBeCloseTo(item.y, 4);
    });
  });
});