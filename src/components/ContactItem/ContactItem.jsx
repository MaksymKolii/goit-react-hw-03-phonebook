import PropTypes from 'prop-types';
import { Span, List, P, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClickDelete }) => {
  return (
    <List key={id}>
      <P>
        Name:<Span>{name}</Span>
      </P>
      <P>
        Number:<Span>{number}</Span>
      </P>
      <Button className="" type="button" onClick={onClickDelete}>
        Delete
      </Button>
    </List>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
