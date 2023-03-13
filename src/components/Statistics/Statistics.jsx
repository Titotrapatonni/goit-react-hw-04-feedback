import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { Text, Value, Wrapper } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return total === 0 ? (
    <Notification></Notification>
  ) : (
    <Wrapper>
      <Text>
        Good: <Value>{good}</Value>
      </Text>
      <Text>
        Neutral: <Value>{neutral}</Value>
      </Text>
      <Text>
        Bad: <Value>{bad}</Value>
      </Text>
      <Text>
        Total: <Value>{total}</Value>
      </Text>
      <Text>
        Positive feedback: <Value>{percentage}%</Value>
      </Text>
    </Wrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
