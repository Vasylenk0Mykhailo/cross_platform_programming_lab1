import { SeriesService } from './series.service';
import { LogService } from '../logger/log.service';

describe('SeriesService', () => {
  let service: SeriesService;
  let logService: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    logService = jasmine.createSpyObj('LogService', ['log']);
    service = new SeriesService(logService);
  });

  it('should calculate series correctly for x=0.1', () => {
    const x = 0.1;
    const expected = Math.atan(x);
    const result = service.calculateSeries(x);
    expect(result).toBeCloseTo(expected, 4);
    expect(logService.log).toHaveBeenCalled();
  });

  it('should tabulate series correctly', () => {
    const results = service.tabulateSeries(-0.5, 0.5, 0.1);
    expect(results.length).toBeGreaterThan(0);
    results.forEach(item => {
      expect(Math.atan(item.x)).toBeCloseTo(item.y, 4);
    });
  });
});