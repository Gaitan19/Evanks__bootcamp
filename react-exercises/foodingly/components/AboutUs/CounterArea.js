import Image from 'next/image';
import { v4 } from 'uuid';
import { statistics } from '@/constants/statistics';

const CounterArea = () => {
  const renderStatistics = () =>
    statistics.map((statistic) => (
      <div className="Statistics-container" key={v4()}>
        <Image
          width={57}
          height={58}
          alt="statistics"
          priority
          className="Statistics-image"
          src={statistic.image}
        />
        <span className="Statistics-counter">{statistic.counter}</span>
        <span className="Statistics-title">{statistic.title}</span>
      </div>
    ));

  return (
    <div className="Statistics">
      <div className="Statistics-content">{renderStatistics()}</div>
    </div>
  );
};

export default CounterArea;
