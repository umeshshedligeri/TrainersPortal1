import { TrainersModule } from './trainers.module';

describe('TrainersModule', () => {
  let trainersModule: TrainersModule;

  beforeEach(() => {
    trainersModule = new TrainersModule();
  });

  it('should create an instance', () => {
    expect(trainersModule).toBeTruthy();
  });
});
