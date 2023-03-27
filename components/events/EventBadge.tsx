// Utilities
import clsx from 'clsx';

type EventBadgeProps = {
  className?: string;
  status: 'active' | 'inactive';
};

const renderEventBadge = (status: string) => {
  const styles = clsx([
    status === 'active' && 'bg-green-600',
    status === 'inactive' && 'bg-red-600'
  ]);

  return clsx([
    styles,
    'font-medium rounded px-2.5 py-0.5 text-xs'
  ]);
};

const EventBadge = (props: EventBadgeProps) => {
  const { className, status } = props;

  return (
    <span className={`${className} ${renderEventBadge(status)}`}>
      {status}
    </span>
  );
};

export { EventBadge };