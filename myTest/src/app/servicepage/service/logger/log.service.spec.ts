import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;
  let consoleSpy: jasmine.Spy;

  beforeEach(() => {
    service = new LogService();
    consoleSpy = spyOn(console, 'log');
  });

  it('should log messages', () => {
    service.log('Test', 123);
    expect(consoleSpy).toHaveBeenCalledWith('Test: 123');
  });
});